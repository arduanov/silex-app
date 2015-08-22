<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmCommonTerms as XmCommonTermsStructure;
use App\Model\XmCommonTerms;

/**
 * XmCommonTermsModel
 *
 * Model class for table xm_common_terms.
 *
 * @see Model
 */
class XmCommonTermsModel extends Model
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
        $this->structure = new XmCommonTermsStructure;
        $this->flexible_entity_class = '\App\Model\XmCommonTerms';
    }
}
