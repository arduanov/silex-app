<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmOrderLicenseOption as XmOrderLicenseOptionStructure;
use App\Model\XmOrderLicenseOption;

/**
 * XmOrderLicenseOptionModel
 *
 * Model class for table xm_order_license_option.
 *
 * @see Model
 */
class XmOrderLicenseOptionModel extends Model
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
        $this->structure = new XmOrderLicenseOptionStructure;
        $this->flexible_entity_class = '\App\Model\XmOrderLicenseOption';
    }
}
