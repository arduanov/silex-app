<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmTrackSample as XmTrackSampleStructure;
use App\Model\XmTrackSample;

/**
 * XmTrackSampleModel
 *
 * Model class for table xm_track_sample.
 *
 * @see Model
 */
class XmTrackSampleModel extends Model
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
        $this->structure = new XmTrackSampleStructure;
        $this->flexible_entity_class = '\App\Model\XmTrackSample';
    }
}
