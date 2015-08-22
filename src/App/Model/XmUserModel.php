<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmUser as XmUserStructure;
use App\Model\XmUser;

/**
 * XmUserModel
 *
 * Model class for table xm_user.
 *
 * @see Model
 */
class XmUserModel extends Model
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
        $this->structure = new XmUserStructure;
        $this->flexible_entity_class = '\App\Model\XmUser';
    }

    public function findSellers()
    {

    }
}
