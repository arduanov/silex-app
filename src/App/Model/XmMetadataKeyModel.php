<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmMetadataKey as XmMetadataKeyStructure;
use App\Model\XmMetadataKey;

/**
 * XmMetadataKeyModel
 *
 * Model class for table xm_metadata_key.
 *
 * @see Model
 */
class XmMetadataKeyModel extends Model
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
        $this->structure = new XmMetadataKeyStructure;
        $this->flexible_entity_class = '\App\Model\XmMetadataKey';
    }
}
