<?php
/**
 * This file has been automatically generated by Pomm's generator.
 * You MIGHT NOT edit this file as your changes will be lost at next
 * generation.
 */

namespace App\Model\AutoStructure;

use PommProject\ModelManager\Model\RowStructure;

/**
 * XmPrice
 *
 * Structure class for relation public.xm_price.
 * 
 * Class and fields comments are inspected from table and fields comments.
 * Just add comments in your database and they will appear here.
 * @see http://www.postgresql.org/docs/9.0/static/sql-comment.html
 *
 *
 *
 * @see RowStructure
 */
class XmPrice extends RowStructure
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
            ->setRelation('public.xm_price')
            ->setPrimaryKey(['id'])
            ->addField('id', 'int4')
            ->addField('track_id', 'int4')
            ->addField('user_id', 'int4')
            ->addField('license_id', 'int4')
            ->addField('actual', 'float8')
            ->addField('draft', 'float8')
            ->addField('is_default', 'bool')
            ->addField('cdate', 'timestamp')
            ->addField('mdate', 'timestamp')
            ->addField('type', 'varchar')
            ;
    }
}