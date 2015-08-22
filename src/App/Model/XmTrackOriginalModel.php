<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmTrackOriginal as XmTrackOriginalStructure;
use App\Model\XmTrackOriginal;

/**
 * XmTrackOriginalModel
 *
 * Model class for table xm_track_original.
 *
 * @see Model
 */
class XmTrackOriginalModel extends Model
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
        $this->structure = new XmTrackOriginalStructure;
        $this->flexible_entity_class = '\App\Model\XmTrackOriginal';
    }
}
