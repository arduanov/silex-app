<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmToken as XmTokenStructure;
use App\Model\XmToken;

/**
 * XmTokenModel
 *
 * Model class for table xm_token.
 *
 * @see Model
 */
class XmTokenModel extends Model
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
        $this->structure = new XmTokenStructure;
        $this->flexible_entity_class = '\App\Model\XmToken';
    }
}
