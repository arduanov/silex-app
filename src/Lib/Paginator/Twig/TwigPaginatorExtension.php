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
namespace Paginator\Twig;

use Twig_Extension;
use Twig_Function_Method;
use Twig_Environment;
use InvalidArgumentException;
use Paginator\Paginator;
use Symfony\Component\HttpFoundation\RequestStack;


class TwigPaginatorExtension extends Twig_Extension
{
    private $requestStack;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('paginator', [$this, 'paginator'], [
                'is_safe' => ['html'],
                'needs_environment' => true
            ])
        ];
//        return [
//            'paginator' => new Twig_Function_Method($this, 'paginator', [
//                'needs_environment' => true,
//                'is_safe' => ['html']
//            ])
//        ];
    }

    /**
     *
     * @param  Twig_Environment $twig
     * @param  Paginator\Paginator $context
     * @return string
     */
    public function paginator(\Twig_Environment $twig, Paginator $paginator)
    {
//        var_dump($this->requestStack);
//        exit;
//        exit;
//        $paginator->setPageRange($globals['paginator.range']);

//        $context = $paginator->getPages();

//        $attributes = clone $globals['app']['request']->attributes;
//        $attributes->remove('_route');
//        $attributes->remove('_route_params');
//        $paginator->setCurrentPageNumber($page);
//        $paginator->setTotalItemCount(150);
//        $context['query'] = '/page';//$globals['app']['request']->query->all() + $attributes->all();
        $data = $paginator->getPages();
//        var_dump($this->requestStack->getCurrentRequest()->query->all());
//        exit;
        $data['query'] = $this->requestStack->getCurrentRequest()->query->all();
        if(isset($data['query']['page'])){
            unset($data['query']['page']);
        }
//$twig->
//        var_dump($twig->render('paginator.twig', $data));exit;
//        var_dump($twig->render('paginator.twig', $data));exit;
        return $twig->render('paginator.twig', $data);

//        return $globals['app']['twig']->render(
//            $globals['app']['paginator.template'],
//            $context
//        );
    }

    public function getName()
    {
        return 'paginator';
    }
}


//use Symfony\Component\HttpFoundation\RequestStack;
//use Symfony\Component\HttpFoundation\Request;
//
///**
// * Twig extension for the Symfony HttpFoundation component.
// *
// * @author Fabien Potencier <fabien@symfony.com>
// */
//class HttpFoundationExtension extends \Twig_Extension
//{
//    private $requestStack;
//
//    public function __construct(RequestStack $requestStack)
//    {
//        $this->requestStack = $requestStack;
//    }
//
//    /**
//     * {@inheritdoc}
//     */
//    public function getFunctions()
//    {
//        return array(
//            new \Twig_SimpleFunction('absolute_url', array($this, 'generateAbsoluteUrl')),
//            new \Twig_SimpleFunction('relative_path', array($this, 'generateRelativePath')),
//        );
//    }
//
//    /**
//     * Returns the absolute URL for the given absolute or relative path.
//     *
//     * This method returns the path unchanged if no request is available.
//     *
//     * @param string $path The path
//     *
//     * @return string The absolute URL
//     *
//     * @see Request::getUriForPath()
//     */
//    public function generateAbsoluteUrl($path)
//    {
//        if (false !== strpos($path, '://') || '//' === substr($path, 0, 2)) {
//            return $path;
//        }
//
//        if (!$request = $this->requestStack->getMasterRequest()) {
//            return $path;
//        }
//
//        if (!$path || '/' !== $path[0]) {
//            $prefix = $request->getPathInfo();
//            $last = strlen($prefix) - 1;
//            if ($last !== $pos = strrpos($prefix, '/')) {
//                $prefix = substr($prefix, 0, $pos).'/';
//            }
//
//            return $request->getUriForPath($prefix.$path);
//        }
//
//        return $request->getSchemeAndHttpHost().$path;
//    }
//
//    /**
//     * Returns a relative path based on the current Request.
//     *
//     * This method returns the path unchanged if no request is available.
//     *
//     * @param string $path The path
//     *
//     * @return string The relative path
//     *
//     * @see Request::getRelativeUriForPath()
//     */
//    public function generateRelativePath($path)
//    {
//        if (false !== strpos($path, '://') || '//' === substr($path, 0, 2)) {
//            return $path;
//        }
//
//        if (!$request = $this->requestStack->getMasterRequest()) {
//            return $path;
//        }
//
//        return $request->getRelativeUriForPath($path);
//    }
//
//    /**
//     * Returns the name of the extension.
//     *
//     * @return string The extension name
//     */
//    public function getName()
//    {
//        return 'request';
//    }
//}
