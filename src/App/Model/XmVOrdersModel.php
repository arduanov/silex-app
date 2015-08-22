<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\ReadQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmVOrders as XmVOrdersStructure;
use App\Model\XmVOrders;

/**
 * XmVOrdersModel
 *
 * Model class for view xm_v_orders.
 *
 * @see Model
 */
class XmVOrdersModel extends Model
{
    use ReadQueries;

    /**
     * __construct()
     *
     * Model constructor
     *
     * @access public
     */
    public function __construct()
    {
        $this->structure = new XmVOrdersStructure;
        $this->flexible_entity_class = '\App\Model\XmVOrders';
    }
}
