<?php

namespace App\Controller;

use App\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class HomeController
{
    public function indexAction(Application $app, Request $reqeust)
    {
        $where = new \PommProject\Foundation\Where('role = $*', ['seller']);
//phpinfo();
        $sellers = $app['user.model']->paginateFindWhere($where, 20);
//        foreach ($computers as $computer) {
//            printf(
//                $computer['id']);
//        }
//        print_r($sellers->getIterator()->extract());exit;
        $data = ['tracks' => $sellers->getIterator()];
//        print_r(get_included_files());
//throw new \Exception(123);

        $response = new Response();
        $response->setMaxAge(30);
        $response->setSharedMaxAge(30);
        $response->setTtl(30);
        return $app->render('projects.twig', $data, $response);
    }

    public function sidebarAction(Application $app, Request $reqeust)
    {
        $where = new \PommProject\Foundation\Where('role = $*', ['buyer']);
        $sellers = $app['user.model']->paginateFindWhere($where, 20);
        $data = ['tracks' => $sellers->getIterator()];

        $response = new Response();
        $response->setTtl(30);
        return $app->render('project.twig', $data, $response);
    }
}