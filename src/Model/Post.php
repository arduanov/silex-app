<?php

namespace App\Model;

use SimpleRecord\Record;

class Post extends Record
{
    const TABLE_NAME = 'post';

    public $id;
    public $title;
    public $slug;
    public $description;
    public $content;
    public $content_markdown;
    public $created_at;
    public $modified_at;
    public $published_at;
    public $published;

    public static $filter = [
        'integer' => ['id'],
        'text' => ['title', 'content']
    ];

    public function getFilterKeys()
    {
        return array_merge(self::$filter['integer'], self::$filter['text']);
    }

    public function filterBy(array $criteria, array $orderBy = [], $limit = null, $offset = null)
    {
        self::$QB = $qb = $this->getQueryBuilder();

        foreach (self::$filter['integer'] as $key) {
            if (isset($criteria[$key])) {
                $where = $key . '= :' . $key;
                $qb->orWhere($where)
                   ->setParameter(':' . $key, (int)$criteria[$key]);
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


