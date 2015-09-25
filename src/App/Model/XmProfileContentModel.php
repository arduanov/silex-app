<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmProfileContent as XmProfileContentStructure;
use App\Model\XmProfileContent;

/**
 * XmProfileContentModel
 *
 * Model class for table xm_profile_content.
 *
 * @see Model
 */
class XmProfileContentModel extends Model
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
        $this->structure = new XmProfileContentStructure;
        $this->flexible_entity_class = '\App\Model\XmProfileContent';
    }
}
