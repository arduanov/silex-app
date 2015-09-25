<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmlcCheckEmail as XmlcCheckEmailStructure;
use App\Model\XmlcCheckEmail;

/**
 * XmlcCheckEmailModel
 *
 * Model class for table xmlc_check_email.
 *
 * @see Model
 */
class XmlcCheckEmailModel extends Model
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
        $this->structure = new XmlcCheckEmailStructure;
        $this->flexible_entity_class = '\App\Model\XmlcCheckEmail';
    }
}
