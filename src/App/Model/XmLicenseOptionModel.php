<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmLicenseOption as XmLicenseOptionStructure;
use App\Model\XmLicenseOption;

/**
 * XmLicenseOptionModel
 *
 * Model class for table xm_license_option.
 *
 * @see Model
 */
class XmLicenseOptionModel extends Model
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
        $this->structure = new XmLicenseOptionStructure;
        $this->flexible_entity_class = '\App\Model\XmLicenseOption';
    }
}
