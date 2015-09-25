<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmProfileSource as XmProfileSourceStructure;
use App\Model\XmProfileSource;

/**
 * XmProfileSourceModel
 *
 * Model class for table xm_profile_source.
 *
 * @see Model
 */
class XmProfileSourceModel extends Model
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
        $this->structure = new XmProfileSourceStructure;
        $this->flexible_entity_class = '\App\Model\XmProfileSource';
    }
}
