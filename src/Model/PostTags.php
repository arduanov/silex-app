<?php

namespace App\Model;

use SimpleRecord\Record;

class PostTags extends Record
{
    const TABLE_NAME = 'post_tags';

    public $post_id;
    public $tag_id;

}


