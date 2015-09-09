<?php

namespace Model;

use SimpleRecord\Record;

class Post extends Record
{
    public $id;
    public $name = 1;
    public $slug = 2;
    public $description = 3;
    public $cdate;
    public $mdate;

//    const TABLE_NAME = 'test';
//    public function __construct($d = null,$from_pdo = false)
//    {
////        var_dump($from_pdo);
////        echo 22;
////        if (!empty($this->id)) {
////            var_dump($this->id);
////        }
//    }
}


