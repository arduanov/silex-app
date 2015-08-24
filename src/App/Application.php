<?php

namespace App;

use Silex\Application as Silex;
use Silex\Provider;
use PommProject\Silex\ServiceProvider as PommProvider;
use Symfony\Component\Debug\ErrorHandler;
use Symfony\Component\Debug\ExceptionHandler;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use WhoopsSilex\WhoopsServiceProvider;


class Application extends Silex
{
    use Silex\TwigTrait;
//    use Silex\UrlGeneratorTrait;
//    use Silex\SecurityTrait;

    public function __construct()
    {
        parent::__construct();

        $this->loadConfig($this);
        $this->loadProviders($this);
        $this->loadErrorHandler($this);
        $this->loadModels($this);
        $this->loadRoutes($this);
//        print_r(get_included_files());

        return $this;
    }

    public function loadConfig(Application $app)
    {
        $config = require_once __DIR__ . '/../../app/config/config.php';
        foreach ($config as $key => $value) {
            $app[$key] = $value;
        }
$app['debug']=true;
    }

    public function loadProviders(Application $app)
    {
        $app->register(new Provider\MonologServiceProvider(), $app['monolog.config']);
//        $app->register(new WhoopsServiceProvider);
        $app->register(new Provider\TwigServiceProvider(), [
            'twig.path' => $app['app.path'] . '/resources/view/',
        ]);
//        $app->register(new \Sorien\Provider\PimpleDumpProvider(), ['dump.path' => $app['root.path']]);

        $app->register(new PommProvider\PommServiceProvider(),
            $app['pomm.config']
        );
        $app->register(new \Silex\Provider\RoutingServiceProvider());

        $app->register(new \Silex\Provider\HttpCacheServiceProvider(), [
            'http_cache.cache_dir' => $app['cache.path'] . '/http',
        ]);

        $app->register(new \Silex\Provider\HttpFragmentServiceProvider());
        $app->register(new \Silex\Provider\ServiceControllerServiceProvider());

//        $app['security.firewalls'] = [
//            'admin' => [
//                'pattern' => '^/admin',
//                'http' => true,
//                'users' => [
//                    // raw password is foo
//                    'admin' => ['ROLE_ADMIN', '5FZ2Z8QIkA7UTZ4BYkoC+GsReLf569mSKDsfods6LYQ8t+a8EW9oaircfMpmaLbPBh4FOBiiFyLfuZmTSUwzZg=='],
//                ],
//            ],
//        ];

//        $app['security.firewalls'] = array(
//            'admin' => array(
//                'pattern' => '^/admin',
//                'form' => array('login_path' => '/login', 'check_path' => '/admin'),
//                'users' => array(
//                    'admin' => array('ROLE_ADMIN', '5FZ2Z8QIkA7UTZ4BYkoC+GsReLf569mSKDsfods6LYQ8t+a8EW9oaircfMpmaLbPBh4FOBiiFyLfuZmTSUwzZg=='),
//                ),
//            ),
//        );







//        $app->register(new \Silex\Provider\SecurityServiceProvider());
//        $app->register(new \Silex\Provider\SessionServiceProvider());


//        $app->register(new Provider\WebProfilerServiceProvider(), [
//            'profiler.cache_dir' => $app['cache.path'] . '/profiler',
//            'profiler.mount_prefix' => '/_profiler', // this is the default
//        ]);
//
//        $app->register(new \PommProject\Silex\ProfilerServiceProvider\PommProfilerServiceProvider());
        $app['db'] = function () use ($app) {
            return $app['pomm']['db'];
        };
    }

    public function loadModels(Application $app)
    {
        $app['user.model'] = function () use ($app) {
            return $app['db']->getModel('App\Model\XmUserModel');
        };
        $app['track.model'] = function () use ($app) {
            return $app['db']->getModel('App\Model\XmTrackOriginalModel');
        };
    }

    public function loadErrorHandler(Application $app)
    {
//        ErrorHandler::register();
//        ExceptionHandler::register();

//        $handler->setExceptionHandler(function (\Exception $e) use ($app) {
//            $app['monolog']->addCritical($e->getMessage());
////            echo $e->getMessage();
////            echo $app['root.path'];
//        });


//        $app->error(function (HttpException $e) use ($app) {
//            $errCode = $e->getStatusCode();
//            $data = [
//                'code' => $errCode,
//                'status' => 'error',
//                'message' => $e->getMessage(),
//                'data' => $e->getHeaders(),
//            ];
//
////            $headers['Content-Type'] = 'application/json; charset=UTF-8';
//            return new JsonResponse($data, $errCode);
//        }, 1000);

//        $app->error(function (\Exception $e) use ($app) {
//            echo 324;;
//        });
    }

    public function loadRoutes(Application $app)
    {
//        $app->get('/', function () use ($app) {
//            $app['pomm'];
//            return 'Welcome to my new Silex app';
//        });

        $app['home.controller'] = function () use ($app) {
            return new \App\Controller\HomeController();
        };

        $app->get('/', "home.controller:indexAction");
        $app->get('/tracks', "home.controller:tracksAction");
        $app->get('/one/', "home.controller:sidebarAction")->bind('sidebar');
        $app->get('/admin', function () {
//            print_r(get_included_files());
            return 'admin';
        });
        $app->get('/two', function () {
            return 'two';
        });

        $app->get('/login', function(Request $request) use ($app) {
            return $app['twig']->render('login.twig', array(
                'error'         => $app['security.last_error']($request),
                'last_username' => $app['session']->get('_security.last_username'),
            ));
        });
    }

}

//$app->get('/', function () use ($app) {
//
//    $iterator = $app['pomm']['db']
//        ->getQueryManager();
//
//    echo get_class($iterator);
//    print_r(get_included_files());
//    return 123;
//});


