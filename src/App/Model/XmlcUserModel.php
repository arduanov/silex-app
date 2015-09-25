<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmlcUser as XmlcUserStructure;
use App\Model\XmlcUser;

/**
 * XmlcUserModel
 *
 * Model class for table xmlc_user.
 *
 * @see Model
 */
class XmlcUserModel extends Model
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
        $this->structure = new XmlcUserStructure;
        $this->flexible_entity_class = '\App\Model\XmlcUser';
    }
}
