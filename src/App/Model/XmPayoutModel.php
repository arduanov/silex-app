<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmPayout as XmPayoutStructure;
use App\Model\XmPayout;

/**
 * XmPayoutModel
 *
 * Model class for table xm_payout.
 *
 * @see Model
 */
class XmPayoutModel extends Model
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
        $this->structure = new XmPayoutStructure;
        $this->flexible_entity_class = '\App\Model\XmPayout';
    }
}
