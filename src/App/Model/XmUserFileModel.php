<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmUserFile as XmUserFileStructure;
use App\Model\XmUserFile;

/**
 * XmUserFileModel
 *
 * Model class for table xm_user_file.
 *
 * @see Model
 */
class XmUserFileModel extends Model
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
        $this->structure = new XmUserFileStructure;
        $this->flexible_entity_class = '\App\Model\XmUserFile';
    }
}
