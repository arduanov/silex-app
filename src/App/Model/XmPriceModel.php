<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmPrice as XmPriceStructure;
use App\Model\XmPrice;

/**
 * XmPriceModel
 *
 * Model class for table xm_price.
 *
 * @see Model
 */
class XmPriceModel extends Model
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
        $this->structure = new XmPriceStructure;
        $this->flexible_entity_class = '\App\Model\XmPrice';
    }
}
