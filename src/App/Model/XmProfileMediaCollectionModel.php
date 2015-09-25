<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmProfileMediaCollection as XmProfileMediaCollectionStructure;
use App\Model\XmProfileMediaCollection;

/**
 * XmProfileMediaCollectionModel
 *
 * Model class for table xm_profile_media_collection.
 *
 * @see Model
 */
class XmProfileMediaCollectionModel extends Model
{
    use WriteQueries;

    /**
     * __construct()
     *
     * Model constructor
     *
     * @access public
     */
    public function __construct()
    {
        $this->structure = new XmProfileMediaCollectionStructure;
        $this->flexible_entity_class = '\App\Model\XmProfileMediaCollection';
    }
}
