<?php

namespace App\Data\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20150927212445 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $table = $schema->createTable('post_tags');
        $table->addColumn('post_id', 'integer');
        $table->addColumn('tag_id', 'integer');
        $table->addForeignKeyConstraint('post',['post_id'],['id']);
        $table->addForeignKeyConstraint('tags',['tag_id'],['id']);
        $table->addUniqueIndex(['post_id','tag_id']);
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
