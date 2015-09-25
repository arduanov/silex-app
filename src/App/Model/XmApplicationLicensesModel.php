<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmApplicationLicenses as XmApplicationLicensesStructure;
use App\Model\XmApplicationLicenses;

/**
 * XmApplicationLicensesModel
 *
 * Model class for table xm_application_licenses.
 *
 * @see Model
 */
class XmApplicationLicensesModel extends Model
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
        $this->structure = new XmApplicationLicensesStructure;
        $this->flexible_entity_class = '\App\Model\XmApplicationLicenses';
    }
}
