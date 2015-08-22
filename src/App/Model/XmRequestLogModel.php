<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmRequestLog as XmRequestLogStructure;
use App\Model\XmRequestLog;

/**
 * XmRequestLogModel
 *
 * Model class for table xm_request_log.
 *
 * @see Model
 */
class XmRequestLogModel extends Model
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
        $this->structure = new XmRequestLogStructure;
        $this->flexible_entity_class = '\App\Model\XmRequestLog';
    }
}
