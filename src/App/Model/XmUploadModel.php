<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmUpload as XmUploadStructure;
use App\Model\XmUpload;

/**
 * XmUploadModel
 *
 * Model class for table xm_upload.
 *
 * @see Model
 */
class XmUploadModel extends Model
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
        $this->structure = new XmUploadStructure;
        $this->flexible_entity_class = '\App\Model\XmUpload';
    }
}
