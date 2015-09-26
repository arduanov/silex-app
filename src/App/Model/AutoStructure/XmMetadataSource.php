<?php
/**
 * This file has been automatically generated by Pomm's generator.
 * You MIGHT NOT edit this file as your changes will be lost at next
 * generation.
 */

namespace App\Model\AutoStructure;

use PommProject\ModelManager\Model\RowStructure;

/**
 * XmMetadataSource
 *
 * Structure class for relation public.xm_metadata_source.
 * 
 * Class and fields comments are inspected from table and fields comments.
 * Just add comments in your database and they will appear here.
 * @see http://www.postgresql.org/docs/9.0/static/sql-comment.html
 *
 *
 *
 * @see RowStructure
 */
class XmMetadataSource extends RowStructure
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
            ->setRelation('public.xm_metadata_source')
            ->setPrimaryKey(['id'])
            ->addField('id', 'int4')
            ->addField('owner_id', 'int4')
            ->addField('original_filename', 'varchar')
            ->addField('upload_id', 'int4')
            ->addField('metadata', 'text')
            ->addField('errors', 'text')
            ->addField('trace', 'text')
            ->addField('info', 'text')
            ->addField('cdate', 'timestamp')
            ->addField('mdate', 'timestamp')
            ;
    }
}