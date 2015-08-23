<?php

namespace App\Model;

use PommProject\ModelManager\Model\Model;
use PommProject\ModelManager\Model\Projection;
use PommProject\ModelManager\Model\ModelTrait\WriteQueries;

use PommProject\Foundation\Where;

use App\Model\AutoStructure\XmTrackOriginal as XmTrackOriginalStructure;
use App\Model\XmTrackOriginal;

/**
 * XmTrackOriginalModel
 *
 * Model class for table xm_track_original.
 *
 * @see Model
 */
class XmTrackOriginalModel extends Model
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
        $this->structure = new XmTrackOriginalStructure;
        $this->flexible_entity_class = '\App\Model\XmTrackOriginal';
    }


    public function findWithMetadata()
    {
        // step 1
        $sql = <<<SQL
select
  :projection
from
  :track t
    left join :metadata_value mv ON t.id = mv.track_id
    LEFT JOIN :track_sample ts ON t.id = ts.track_id
  INNER JOIN :track_owner u ON t.owner_id = u.id AND (u.common = TRUE)
INNER JOIN xm_price price ON u.id = price.user_id
where
    t.id > 5000
group by t.id,ts.id LIMIT 100
SQL;

//        SELECT t.id,json_agg(mv) metadata
//FROM xm_track_original t
//  LEFT JOIN xm_metadata_value mv on t.id = mv.track_id
        // step 2
        $projection = $this->createProjection();
//                           ->setField('metadata', "json_agg(mv) metadata", 'json');
        $projection->setField('sample','ts.id sample','varchar');
        $projection->setField('vaweform','ts.waveform vaweform','varchar');
//        $projection->setField('x_user','json_agg(DISTINCT u) x_user','json');

        // step 3
        $sql = strtr($sql,
            [
                ':projection' => $projection->formatFields('t'),
                ':track' => $this->getStructure()->getRelation(),
                ':metadata_value' => $this->getSession()
                                          ->getModel('\App\Model\XmMetadataValueModel')
                                          ->getStructure()
                                          ->getRelation(),
                ':track_sample' => $this->getSession()
                                          ->getModel('\App\Model\XmTrackSampleModel')
                                          ->getStructure()
                                          ->getRelation(),
                ':track_owner' => $this->getSession()
                                          ->getModel('\App\Model\XmUserModel')
                                          ->getStructure()
                                          ->getRelation(),
            ]
        );
//print_r($projection->formatFields('t'));
//        print_r($sql);
//        exit;
        // step 4
        return $this->query($sql, [], $projection);
    }
}
