<?php
namespace Paginator\Provider;

use Pimple\Container;
use Pimple\ServiceProviderInterface;
use Twig_Loader_Filesystem;
use Twig_SimpleFilter;

class PaginatorServiceProvider implements ServiceProviderInterface
{
    public function register(Container $app)
    {
        $app['twig.loader']->addLoader(new Twig_Loader_Filesystem(__DIR__ . '/../View'));
        $app->extend('twig', function ($twig, $app) {
            $twig->addFilter(new Twig_SimpleFilter('cast_to_array', function ($stdClassObject) {
                return (array)$stdClassObject;
            }));
            return $twig;
        });
        //        $app['twig'] = $app->extend('twig', function ($twig,$app) {
//            $twig->addGlobal('paginator.range', $app['paginator.range']);
//            $twig->addExtension(new Twig\TwigPaginatorExtension($app['request_stack']));
//
//            return $twig;
//        });
        $app['paginator'] = $app->protect(function ($currentPageNumber, $totalItemsCount, $itemCountPerPage = null) use ($app) {
            if (!$itemCountPerPage && isset($app['paginator.per_page'])) {
                $itemCountPerPage = $app['paginator.per_page'];
            }

            $paginator = new \Paginator\Paginator($currentPageNumber, $totalItemsCount, $itemCountPerPage);
            if (isset($app['paginator.range'])) {
                $paginator->setPageRange($app['paginator.range']);
            }
            if (isset($app['paginator.style'])) {
                $paginator->setDefaultScrollingStyle();
            }
            return $paginator->getPages();
        });

    }
}