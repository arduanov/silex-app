<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmMetadataValue as XmMetadataValueStructure;
use App\Model\XmMetadataValue;

/**
 * XmMetadataValueModel
 *
 * Model class for table xm_metadata_value.
 *
 * @see Model
 */
class XmMetadataValueModel extends Model
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
        $this->structure = new XmMetadataValueStructure;
        $this->flexible_entity_class = '\App\Model\XmMetadataValue';
    }
}
