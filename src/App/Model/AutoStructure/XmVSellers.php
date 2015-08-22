<?php
/**
 * This file has been automatically generated by Pomm's generator.
 * You MIGHT NOT edit this file as your changes will be lost at next
 * generation.
 */

namespace App\Model\AutoStructure;

use PommProject\ModelManager\Model\RowStructure;

/**
 * XmVSellers
 *
 * Structure class for relation public.xm_v_sellers.
 * 
 * Class and fields comments are inspected from table and fields comments.
 * Just add comments in your database and they will appear here.
 * @see http://www.postgresql.org/docs/9.0/static/sql-comment.html
 *
 *
 *
 * @see RowStructure
 */
class XmVSellers extends RowStructure
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
            ->setRelation('public.xm_v_sellers')
            ->setPrimaryKey([])
            ->addField('id', 'int4')
            ->addField('common_marketplace', 'bool')
            ->addField('terms_accepted', 'bool')
            ->addField('email', 'varchar')
            ->addField('fname', 'varchar')
            ->addField('lname', 'varchar')
            ->addField('status', 'int2')
            ->addField('cdate', 'timestamp')
            ->addField('utm_campaign', 'varchar')
            ->addField('auth_service', 'varchar')
            ->addField('auth_url', 'varchar')
            ->addField('agreement_locked', 'bool')
            ->addField('agreement_percent', 'int4')
            ->addField('agreement_status', 'text')
            ->addField('agreement_fields', 'text')
            ->addField('application_enabled', 'bool')
            ->addField('application_generated', 'bool')
            ->addField('application_generation', 'bool')
            ->addField('application_app_id', 'varchar')
            ->addField('application_domain', 'varchar')
            ->addField('tracks_count', 'int8')
            ->addField('tracks_uploaded', 'bool')
            ;
    }
}
