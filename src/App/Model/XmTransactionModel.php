<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmTransaction as XmTransactionStructure;
use App\Model\XmTransaction;

/**
 * XmTransactionModel
 *
 * Model class for table xm_transaction.
 *
 * @see Model
 */
class XmTransactionModel extends Model
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
        $this->structure = new XmTransactionStructure;
        $this->flexible_entity_class = '\App\Model\XmTransaction';
    }
}
