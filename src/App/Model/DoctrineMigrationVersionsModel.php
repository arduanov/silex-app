<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\DoctrineMigrationVersions as DoctrineMigrationVersionsStructure;
use App\Model\DoctrineMigrationVersions;

/**
 * DoctrineMigrationVersionsModel
 *
 * Model class for table doctrine_migration_versions.
 *
 * @see Model
 */
class DoctrineMigrationVersionsModel extends Model
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
        $this->structure = new DoctrineMigrationVersionsStructure;
        $this->flexible_entity_class = '\App\Model\DoctrineMigrationVersions';
    }
}
