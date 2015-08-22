<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmOrder as XmOrderStructure;
use App\Model\XmOrder;

/**
 * XmOrderModel
 *
 * Model class for table xm_order.
 *
 * @see Model
 */
class XmOrderModel extends Model
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
        $this->structure = new XmOrderStructure;
        $this->flexible_entity_class = '\App\Model\XmOrder';
    }
}
