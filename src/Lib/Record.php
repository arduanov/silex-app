<?php

namespace SimpleRecord;

use Doctrine\DBAL;
use Doctrine\Common\Inflector\Inflector;

/**
 * The Record class represents a single database record.
 *
 * It is used as an abstraction layer so classes don't need to implement their
 * own database functionality.
 */
class Record
{
    /**
     * @var DBAL\Connection
     */
    public static $CONN;
//    public static $EVENT_MANAGER;

    /**
     * Sets a static reference for the connection to the database.
     *
     * @param <type> $connection
     */
    final public static function connection(DBAL\Connection $connection)
    {
        self::$CONN = $connection;
    }

    /**
     * Returns a reference to a database connection.
     *
     * @return \Doctrine\DBAL\Connection
     */
    final public static function getConnection()
    {
        return self::$CONN;
    }

    /**
     * Returns a database table name.
     *
     * The name that is returned is based on the classname or on the TABLE_NAME
     * constant in that class if that constant exists.
     *
     * @param string $class_name
     * @return string Database table name.
     */
    final public function tableName($class_name = null)
    {
        if (!$class_name) {
            $class_name = get_class($this);
        }

        try {
            return constant($class_name . '::TABLE_NAME');
        } catch (\Exception $e) {
            $reflection = new \ReflectionClass($class_name);
            $class_name = $reflection->getShortName();

            return Inflector::tableize($class_name);
        }
    }

    /**
     * Constructor for the Record class.
     *
     * If the $data parameter is given and is an array, the constructor sets
     * the class's variables based on the key=>value pairs found in the array.
     *
     * @param array $data An array of key,value pairs.
     */
    public function __construct(array $data = null, $FETCH_PDO = false)
    {
        if ($FETCH_PDO) {
            $this->afterFetch();
        }
        if (is_array($data)) {
            $this->setFromData($data);
        }
    }

    /**
     * Sets the class's variables based on the key=>value pairs in the given array.
     *
     * @param array $data An array of key,value pairs.
     */
    public function setFromData($data)
    {
        foreach ($data as $key => $value) {
            $this->$key = $value;
        }
    }

    /**
     * Generates an insert or update string from the supplied data and executes it
     *
     * @return boolean True when the insert or update succeeded.
     */
    public function save()
    {
        if (!$this->beforeSave()) {
            return false;
        }

        $value_of = [];
        $columns = $this->getColumns();
        foreach ($columns as $column) {
            if (!empty($this->$column) || is_numeric($this->$column)) { // Do include 0 as value
                $value_of[$column] = $this->$column;
            }
        }

        // Make sure we don't try to add "id" field;
        if (isset($value_of['id'])) {
            unset($value_of['id']);
        }

        if (empty($this->id)) {
            if (!$this->beforeInsert()) {
                return false;
            }

            $return = self::$CONN->insert($this->tableName(), $value_of);
            $this->id = self::$CONN->lastInsertId();

            if (!$this->afterInsert()) {
                return false;
            }
        } else {
            if (!$this->beforeUpdate()) {
                return false;
            }

            $return = self::$CONN->update($this->tableName(), $value_of, ['id' => $this->id]);

            if (!$this->afterUpdate()) {
                return false;
            }
        }
        if (!$this->afterSave()) {
            return false;
        }

        return $return;
    }

    /**
     * Generates a delete string and executes it.
     *
     * @param string $table The table name.
     * @param string $where The query condition.
     * @return boolean      True if delete was successful.
     */
    public function delete()
    {
        if (!$this->beforeDelete()) {
            return false;
        }
        $return = self::$CONN->delete($this->tableName(), ['id' => $this->id]);

        if (!$this->afterDelete()) {
//            $this->save();
            return false;
        }

        return $return;
    }

    public function deleteBy(array $criteria)
    {

    }


    /**
     * Returns an array of all columns in the table.
     *
     * It is a good idea to rewrite this method in all your model classes.
     * This function is used in save() for creating the insert and/or update
     * sql query.
     */
    public function getColumns()
    {
        return array_keys(get_object_vars($this));
    }


    public function find($id)
    {
        return $this->findOneBy(['id' => $id]);
    }

    public function findAll()
    {
        return $this->findBy([]);
    }

    public function findBy(array $criteria, array $orderBy = [], $limit = null, $offset = null)
    {
        $qb = self::$CONN->createQueryBuilder();
        $qb->select($this->getColumns())
           ->from($this->tableName());

        foreach ($criteria as $key => $value) {
            $type = null;
            if (is_array($value)) {
                $type = DBAL\Connection::PARAM_STR_ARRAY;
            }
            $where = $key . ' = :' . $key;
            $qb->andWhere($where)
               ->setParameter(':' . $key, $value, $type);
        }
        foreach ($orderBy as $sort => $order) {
            $qb->addOrderBy($sort, $order);
        }
        if ($limit) {
            $qb->setMaxResults($limit);
        }
        if ($offset) {
            $qb->setFirstResult($offset);
        }

        return $this->findByQueryBuilder($qb);
    }

//    public function findBySql($sql)
//    {
//        $qb = self::$CONN->query();
//
//
//        return '';
//    }

    /**
     * Returns a single object, retrieved from the database.
     *
     * @param array $criteria Options array containing parameters for the query
     * @throws \Exception
     * @return $this
     */
    public function findOneBy(array $criteria)
    {
        $items = $this->findBy($criteria);

        if (!$items) {
            return false;
        }

        if (count($items) > 1) {
            throw new \Exception('finded more than one');
        }

        return array_shift($items);
    }

    public function findByQueryBuilder(DBAL\Query\QueryBuilder $qb)
    {
        return $qb->execute()->fetchAll(\PDO::FETCH_CLASS, get_class($this), [null, true]);
    }

    /**
     * Allows sub-classes do stuff before a Record is saved.
     *
     * @return boolean True if the actions succeeded.
     */
    public function beforeSave()
    {
        return true;
    }

    /**
     * Allows sub-classes do stuff before a Record is inserted.
     *
     * @return boolean True if the actions succeeded.
     */
    public function beforeInsert()
    {
        return true;
    }

    /**
     * Allows sub-classes do stuff before a Record is updated.
     *
     * @return boolean True if the actions succeeded.
     */
    public function beforeUpdate()
    {
        return true;
    }

    /**
     * Allows sub-classes do stuff before a Record is deleted.
     *
     * @return boolean True if the actions succeeded.
     */
    public function beforeDelete()
    {
        return true;
    }

    /**
     * Allows sub-classes do stuff after a Record is saved.
     *
     * @return boolean True if the actions succeeded.
     */
    public function afterFetch()
    {
        return true;
    }

    /**
     * Allows sub-classes do stuff after a Record is saved.
     *
     * @return boolean True if the actions succeeded.
     */
    public function afterSave()
    {
        return true;
    }

    /**
     * Allows sub-classes do stuff after a Record is inserted.
     *
     * @return boolean True if the actions succeeded.
     */
    public function afterInsert()
    {
        return true;
    }

    /**
     * Allows sub-classes do stuff after a Record is updated.
     *
     * @return boolean True if the actions succeeded.
     */
    public function afterUpdate()
    {
        return true;
    }

    /**
     * Allows sub-classes do stuff after a Record is deleted.
     *
     * @return boolean True if the actions succeeded.
     */
    public function afterDelete()
    {
        return true;
    }
}

