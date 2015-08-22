<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmMetadataSource as XmMetadataSourceStructure;
use App\Model\XmMetadataSource;

/**
 * XmMetadataSourceModel
 *
 * Model class for table xm_metadata_source.
 *
 * @see Model
 */
class XmMetadataSourceModel extends Model
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
        $this->structure = new XmMetadataSourceStructure;
        $this->flexible_entity_class = '\App\Model\XmMetadataSource';
    }
}
