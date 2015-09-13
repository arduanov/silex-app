<?php

namespace App\Data\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

class Version20150912111529 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $table = $schema->createTable('post');
        $table->addColumn('id', 'integer')
              ->setAutoincrement(true);
        $table->setPrimaryKey(['id']);
        $table->addColumn('title', 'string');
        $table->addColumn('slug', 'string');
        $table->addColumn('description', 'text')
              ->setNotnull(false);
        $table->addColumn('content', 'text')
              ->setNotnull(false);
        $table->addColumn('content_markdown', 'text')
              ->setNotnull(false);

        $table->addColumn('created_at', 'datetime');
        $table->addColumn('modified_at', 'datetime')
              ->setNotnull(false);
        $table->addColumn('published_at', 'datetime')
              ->setNotnull(false);
        $table->addColumn('published', 'boolean')
              ->setDefault(false);

        $table->addUniqueIndex(['slug','published']);
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
