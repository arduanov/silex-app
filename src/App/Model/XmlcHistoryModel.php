<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmlcHistory as XmlcHistoryStructure;
use App\Model\XmlcHistory;

/**
 * XmlcHistoryModel
 *
 * Model class for table xmlc_history.
 *
 * @see Model
 */
class XmlcHistoryModel extends Model
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
        $this->structure = new XmlcHistoryStructure;
        $this->flexible_entity_class = '\App\Model\XmlcHistory';
    }
}
