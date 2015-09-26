<?php
/**
 * This file has been automatically generated by Pomm's generator.
 * You MIGHT NOT edit this file as your changes will be lost at next
 * generation.
 */

namespace App\Model\AutoStructure;

use PommProject\ModelManager\Model\RowStructure;

/**
 * XmApplication
 *
 * Structure class for relation public.xm_application.
 * 
 * Class and fields comments are inspected from table and fields comments.
 * Just add comments in your database and they will appear here.
 * @see http://www.postgresql.org/docs/9.0/static/sql-comment.html
 *
 *
 *
 * @see RowStructure
 */
class XmApplication extends RowStructure
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
            ->setRelation('public.xm_application')
            ->setPrimaryKey(['id'])
            ->addField('id', 'int4')
            ->addField('status', 'varchar')
            ->addField('title', 'varchar')
            ->addField('styles_skin', 'varchar')
            ->addField('streaming_length', 'varchar')
            ->addField('streaming_quality', 'varchar')
            ->addField('downloading_quality', 'varchar')
            ->addField('downloading_start', 'varchar')
            ->addField('downloading_length', 'int4')
            ->addField('purchasing_qualty', 'varchar')
            ->addField('purchasing_type', 'varchar')
            ->addField('enabled', 'bool')
            ->addField('generated', 'bool')
            ->addField('generation', 'bool')
            ->addField('app_id', 'varchar')
            ->addField('domain', 'varchar')
            ->addField('cdate', 'timestamp')
            ->addField('mdate', 'timestamp')
            ->addField('published_disabled', 'bool')
            ->addField('published_date', 'timestamp')
            ->addField('generated_date', 'timestamp')
            ;
    }
}