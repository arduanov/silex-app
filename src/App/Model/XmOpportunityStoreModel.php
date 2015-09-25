<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmOpportunityStore as XmOpportunityStoreStructure;
use App\Model\XmOpportunityStore;

/**
 * XmOpportunityStoreModel
 *
 * Model class for table xm_opportunity_store.
 *
 * @see Model
 */
class XmOpportunityStoreModel extends Model
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
        $this->structure = new XmOpportunityStoreStructure;
        $this->flexible_entity_class = '\App\Model\XmOpportunityStore';
    }
}
