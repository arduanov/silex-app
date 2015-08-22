<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmlcContact as XmlcContactStructure;
use App\Model\XmlcContact;

/**
 * XmlcContactModel
 *
 * Model class for table xmlc_contact.
 *
 * @see Model
 */
class XmlcContactModel extends Model
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
        $this->structure = new XmlcContactStructure;
        $this->flexible_entity_class = '\App\Model\XmlcContact';
    }
}
