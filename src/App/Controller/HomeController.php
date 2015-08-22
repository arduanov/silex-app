<?php

namespace App\Controller;

use App\Application;
use Symfony\Component\HttpFoundation\Request;

class HomeController
{
    public function indexAction(Application $app,Request $reqeust)
    {
        echo get_class($app['pomm']);

        echo $app['root.path'];
        echo 2345;
        exit;
    }
}