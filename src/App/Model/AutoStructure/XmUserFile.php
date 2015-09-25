<?php
/**
 * This file has been automatically generated by Pomm's generator.
 * You MIGHT NOT edit this file as your changes will be lost at next
 * generation.
 */

namespace App\Model\AutoStructure;

use PommProject\ModelManager\Model\RowStructure;

/**
 * XmUserFile
 *
 * Structure class for relation public.xm_user_file.
 * 
 * Class and fields comments are inspected from table and fields comments.
 * Just add comments in your database and they will appear here.
 * @see http://www.postgresql.org/docs/9.0/static/sql-comment.html
 *
 *
 *
 * @see RowStructure
 */
class XmUserFile extends RowStructure
{
    /**
     * __construct
     *
     * Structure definition.
     *
     * @access public
     */
    public function __construct()
    {
        $this
            ->setRelation('public.xm_user_file')
            ->setPrimaryKey(['id'])
            ->addField('id', 'int4')
            ->addField('opportunity_id', 'int4')
            ->addField('owner_id', 'int4')
            ->addField('uploader_id', 'int4')
            ->addField('hash', 'varchar')
            ->addField('storage_key', 'varchar')
            ->addField('storage', 'varchar')
            ->addField('mime_type', 'varchar')
            ->addField('original_filename', 'varchar')
            ->addField('source', 'varchar')
            ->addField('cdate', 'timestamp')
            ->addField('mdate', 'timestamp')
            ;
    }
}
