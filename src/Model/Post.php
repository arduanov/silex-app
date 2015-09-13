<?php

namespace Model;

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

//    public function __construct($d = null,$from_pdo = false)
//    {
////        var_dump($from_pdo);
////        echo 22;
////        if (!empty($this->id)) {
////            var_dump($this->id);
////        }
//    }
}


