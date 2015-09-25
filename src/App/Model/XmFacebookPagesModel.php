<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmFacebookPages as XmFacebookPagesStructure;
use App\Model\XmFacebookPages;

/**
 * XmFacebookPagesModel
 *
 * Model class for table xm_facebook_pages.
 *
 * @see Model
 */
class XmFacebookPagesModel extends Model
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
        $this->structure = new XmFacebookPagesStructure;
        $this->flexible_entity_class = '\App\Model\XmFacebookPages';
    }
}
