<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmCounter as XmCounterStructure;
use App\Model\XmCounter;

/**
 * XmCounterModel
 *
 * Model class for table xm_counter.
 *
 * @see Model
 */
class XmCounterModel extends Model
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
        $this->structure = new XmCounterStructure;
        $this->flexible_entity_class = '\App\Model\XmCounter';
    }
}
