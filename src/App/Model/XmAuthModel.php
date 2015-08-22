<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmAuth as XmAuthStructure;
use App\Model\XmAuth;

/**
 * XmAuthModel
 *
 * Model class for table xm_auth.
 *
 * @see Model
 */
class XmAuthModel extends Model
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
        $this->structure = new XmAuthStructure;
        $this->flexible_entity_class = '\App\Model\XmAuth';
    }
}
