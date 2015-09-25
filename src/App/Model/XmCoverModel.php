<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmCover as XmCoverStructure;
use App\Model\XmCover;

/**
 * XmCoverModel
 *
 * Model class for table xm_cover.
 *
 * @see Model
 */
class XmCoverModel extends Model
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
        $this->structure = new XmCoverStructure;
        $this->flexible_entity_class = '\App\Model\XmCover';
    }
}
