<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\ReadQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmVSellers as XmVSellersStructure;
use App\Model\XmVSellers;

/**
 * XmVSellersModel
 *
 * Model class for view xm_v_sellers.
 *
 * @see Model
 */
class XmVSellersModel extends Model
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
        $this->structure = new XmVSellersStructure;
        $this->flexible_entity_class = '\App\Model\XmVSellers';
    }
}
