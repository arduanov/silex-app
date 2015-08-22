<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmProfileCategory as XmProfileCategoryStructure;
use App\Model\XmProfileCategory;

/**
 * XmProfileCategoryModel
 *
 * Model class for table xm_profile_category.
 *
 * @see Model
 */
class XmProfileCategoryModel extends Model
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
        $this->structure = new XmProfileCategoryStructure;
        $this->flexible_entity_class = '\App\Model\XmProfileCategory';
    }
}
