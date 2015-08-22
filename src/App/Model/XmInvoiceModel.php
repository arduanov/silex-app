<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmInvoice as XmInvoiceStructure;
use App\Model\XmInvoice;

/**
 * XmInvoiceModel
 *
 * Model class for table xm_invoice.
 *
 * @see Model
 */
class XmInvoiceModel extends Model
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
        $this->structure = new XmInvoiceStructure;
        $this->flexible_entity_class = '\App\Model\XmInvoice';
    }
}
