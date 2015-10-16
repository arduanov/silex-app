<?php

namespace App\Model;

use Record\Record;

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

//    public function filterBy(array $criteria, array $orderBy = [], $limit = null, $offset = null)
//    {
//        self::$QB = $qb = $this->getQueryBuilder();
//
//        foreach (self::$filter['integer'] as $key) {
//            if (isset($criteria[$key]) && is_numeric($criteria[$key])) {
//                $where = $key . '= :' . $key;
//                $qb->orWhere($where)
//                   ->setParameter(':' . $key, $criteria[$key]);
//            }
//        }
//        foreach (self::$filter['text'] as $key) {
//            if (isset($criteria[$key])) {
//                $where = $key . ' LIKE :' . $key;
//                $qb->orWhere($where)
//                   ->setParameter(':' . $key, '%' . $criteria[$key] . '%');
//            }
//        }
//
//        foreach ($orderBy as $sort => $order) {
//            $qb->addOrderBy($sort, $order);
//        }
//        if ($limit) {
//            $qb->setMaxResults($limit);
//        }
//        if ($offset) {
//            $qb->setFirstResult($offset);
//        }
//        return $this->findByQueryBuilder($qb);
//    }

    public function getTags()
    {
        $post_tags = $this->app()['post_tags.model']->where('post_id', $this->id)->get();
        $result = [];
        foreach ($post_tags as $item) {
            $result[] = $item->tag_id;
        }

        return $result;
    }

    public function addTag($tag_id)
    {
        $this->add_tag_ids[] = $tag_id;
    }

    public function removeTag($tag_id)
    {
        $this->app()['post_tags.model']->where('post_id', $this->id)->where('tag_id', $tag_id)->delete();
    }

    public function beforeUpdate()
    {
        $this->modified_at = date('c');
        return true;
    }

    public function afterSave($app)
    {
        if (!empty($this->add_tag_ids)) {
            foreach ($this->add_tag_ids as $tag_id) {
                $post_tags = $this->app()['post_tags.model']->fill(['post_id' => $this->id, 'tag_id' => $tag_id]);
                $post_tags->save();
            }
        }
        return true;
    }

    public function getColumns()
    {
        return ['id', 'title', 'slug', 'description', 'content', 'content_markdown', 'created_at', 'modified_at', 'published_at', 'published'];
    }
}


