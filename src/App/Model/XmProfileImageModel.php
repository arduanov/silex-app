<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmProfileImage as XmProfileImageStructure;
use App\Model\XmProfileImage;

/**
 * XmProfileImageModel
 *
 * Model class for table xm_profile_image.
 *
 * @see Model
 */
class XmProfileImageModel extends Model
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
        $this->structure = new XmProfileImageStructure;
        $this->flexible_entity_class = '\App\Model\XmProfileImage';
    }
}
