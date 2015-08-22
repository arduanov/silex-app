<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmProject as XmProjectStructure;
use App\Model\XmProject;

/**
 * XmProjectModel
 *
 * Model class for table xm_project.
 *
 * @see Model
 */
class XmProjectModel extends Model
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
        $this->structure = new XmProjectStructure;
        $this->flexible_entity_class = '\App\Model\XmProject';
    }
}
