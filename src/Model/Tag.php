<?php

namespace App\Model;

use SimpleRecord\Record;

class Tag extends Record
{
    const TABLE_NAME = 'tags';

    public $id;
    public $title;
    public $slug;
    public $created_at;
    public $modified_at;

    public static $filter = [
        'integer' => ['id'],
        'text' => ['title','slug']
    ];

    public function getFilterKeys()
    {
        return array_merge(self::$filter['integer'], self::$filter['text']);
    }

    public function filterBy(array $criteria, array $orderBy = [], $limit = null, $offset = null)
    {
        self::$QB = $qb = $this->getQueryBuilder();

        foreach (self::$filter['integer'] as $key) {
            if (isset($criteria[$key])&& is_numeric($criteria[$key])) {
                $where = $key . '= :' . $key;
                $qb->orWhere($where)
                   ->setParameter(':' . $key, $criteria[$key]);
            }
        }
        foreach (self::$filter['text'] as $key) {
            if (isset($criteria[$key])) {
                $where = $key . ' LIKE :' . $key;
                $qb->orWhere($where)
                   ->setParameter(':' . $key, '%' . $criteria[$key] . '%');
            }
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

    public function beforeUpdate()
    {
        $this->modified_at = date('c');
        return true;
    }
}


