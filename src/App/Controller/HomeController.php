<?php

namespace App\Controller;

use App\Application;
use Symfony\Component\HttpFoundation\Request;

class HomeController
{
    public function indexAction(Application $app, Request $reqeust)
    {
        $where = new \PommProject\Foundation\Where('role = $*', ['seller']);
//phpinfo();
        $sellers = $app['user.model']->paginateFindWhere($where,20);
//        foreach ($computers as $computer) {
//            printf(
//                $computer['id']);
//        }
//        print_r($sellers->getIterator()->extract());exit;
        $data = ['tracks' => $sellers->getIterator()];
//        print_r(get_included_files());
//throw new \Exception(123);
        return $app->render('projects.twig', $data);
    }
}