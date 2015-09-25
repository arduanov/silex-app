<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmlcHistoryContacts as XmlcHistoryContactsStructure;
use App\Model\XmlcHistoryContacts;

/**
 * XmlcHistoryContactsModel
 *
 * Model class for table xmlc_history_contacts.
 *
 * @see Model
 */
class XmlcHistoryContactsModel extends Model
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
        $this->structure = new XmlcHistoryContactsStructure;
        $this->flexible_entity_class = '\App\Model\XmlcHistoryContacts';
    }
}
