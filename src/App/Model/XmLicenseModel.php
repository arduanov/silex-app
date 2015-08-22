<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmLicense as XmLicenseStructure;
use App\Model\XmLicense;

/**
 * XmLicenseModel
 *
 * Model class for table xm_license.
 *
 * @see Model
 */
class XmLicenseModel extends Model
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
        $this->structure = new XmLicenseStructure;
        $this->flexible_entity_class = '\App\Model\XmLicense';
    }
}
