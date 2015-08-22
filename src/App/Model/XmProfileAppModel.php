<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmProfileApp as XmProfileAppStructure;
use App\Model\XmProfileApp;

/**
 * XmProfileAppModel
 *
 * Model class for table xm_profile_app.
 *
 * @see Model
 */
class XmProfileAppModel extends Model
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
        $this->structure = new XmProfileAppStructure;
        $this->flexible_entity_class = '\App\Model\XmProfileApp';
    }
}
