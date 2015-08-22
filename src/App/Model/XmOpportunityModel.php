<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmOpportunity as XmOpportunityStructure;
use App\Model\XmOpportunity;

/**
 * XmOpportunityModel
 *
 * Model class for table xm_opportunity.
 *
 * @see Model
 */
class XmOpportunityModel extends Model
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
        $this->structure = new XmOpportunityStructure;
        $this->flexible_entity_class = '\App\Model\XmOpportunity';
    }
}
