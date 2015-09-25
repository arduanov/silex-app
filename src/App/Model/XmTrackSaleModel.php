<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmTrackSale as XmTrackSaleStructure;
use App\Model\XmTrackSale;

/**
 * XmTrackSaleModel
 *
 * Model class for table xm_track_sale.
 *
 * @see Model
 */
class XmTrackSaleModel extends Model
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
        $this->structure = new XmTrackSaleStructure;
        $this->flexible_entity_class = '\App\Model\XmTrackSale';
    }
}
