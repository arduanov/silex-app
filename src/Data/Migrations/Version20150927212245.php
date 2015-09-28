<?php

namespace App\Data\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150927212245 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $table = $schema->createTable('tags');
        $table->addColumn('id', 'integer')->setAutoincrement(true);
        $table->setPrimaryKey(['id']);
        $table->addColumn('title', 'string');
        $table->addColumn('slug', 'string');

        $table->addColumn('created_at', 'datetime')->setDefault('CURRENT_TIMESTAMP');
        $table->addColumn('modified_at', 'datetime')->setDefault('CURRENT_TIMESTAMP');
        $table->addUniqueIndex(['slug']);

    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
