<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmFeedback as XmFeedbackStructure;
use App\Model\XmFeedback;

/**
 * XmFeedbackModel
 *
 * Model class for table xm_feedback.
 *
 * @see Model
 */
class XmFeedbackModel extends Model
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
        $this->structure = new XmFeedbackStructure;
        $this->flexible_entity_class = '\App\Model\XmFeedback';
    }
}
