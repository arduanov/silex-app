<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmAgreement as XmAgreementStructure;
use App\Model\XmAgreement;

/**
 * XmAgreementModel
 *
 * Model class for table xm_agreement.
 *
 * @see Model
 */
class XmAgreementModel extends Model
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
        $this->structure = new XmAgreementStructure;
        $this->flexible_entity_class = '\App\Model\XmAgreement';
    }
}
