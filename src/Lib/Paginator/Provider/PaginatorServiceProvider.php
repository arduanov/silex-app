<?php
/**
 * @package     Paginator
 * @author      Axel Etcheverry <axel@etcheverry.biz>
 * @copyright   Copyright (c) 2013 Axel Etcheverry (http://www.axel-etcheverry.com)
 * Displays     <a href="http://creativecommons.org/licenses/MIT/deed.fr">MIT</a>
 * @license     http://creativecommons.org/licenses/MIT/deed.fr    MIT
 */

/**
 * @namespace
 */
namespace Paginator\Provider;

use Pimple\Container;
use Paginator\Twig;
use Pimple\ServiceProviderInterface;
use Twig_Loader_Filesystem;

class PaginatorServiceProvider implements ServiceProviderInterface
{
    public function register(Container $app)
    {
//        $app['paginator.template'] = 'paginator.twig';
//        $app['paginator.range'] = 5;
        $app['twig.loader']->addLoader(new Twig_Loader_Filesystem(__DIR__ . '/../View'));

//        $app['twig'] = $app->extend('twig', function ($twig,$app) {
//            $twig->addGlobal('paginator.range', $app['paginator.range']);
//            $twig->addExtension(new Twig\TwigPaginatorExtension($app['request_stack']));
//
//            return $twig;
//        });
    }
}