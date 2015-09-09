<?php

namespace Model;

use SimpleRecord\Record;

class Post extends Record
{
    public $id;
    public $name = 1;
    public $slug = 2;
    public $description = 3;
    public $cdate = '2000-01-01 00:00:00';
    public $mdate = '2000-01-01 00:00:00';

    public function __construct()
    {
        echo 22;
        if (!empty($this->id)) {
            var_dump($this->id);
        }
    }
}


