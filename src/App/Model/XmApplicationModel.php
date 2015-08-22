<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmApplication as XmApplicationStructure;
use App\Model\XmApplication;

/**
 * XmApplicationModel
 *
 * Model class for table xm_application.
 *
 * @see Model
 */
class XmApplicationModel extends Model
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
        $this->structure = new XmApplicationStructure;
        $this->flexible_entity_class = '\App\Model\XmApplication';
    }
}
