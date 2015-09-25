<?php

namespace App;

use Silex\Provider;
use Silex\Application as Silex;
use Symfony\Component\Debug\ErrorHandler;
use Symfony\Component\Debug\ExceptionHandler;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use WhoopsSilex\WhoopsServiceProvider;
use Symfony\Component\Debug\Debug;
use Doctrine\DBAL\Migrations\OutputWriter;
use Symfony\Component\Console\Output\ConsoleOutput;
use Doctrine\DBAL\Migrations\Configuration\Configuration;
use Symfony\Component\HttpKernel\HttpKernelInterface;


class Application extends Silex
{
    use Silex\TwigTrait;
    use Silex\UrlGeneratorTrait;

    use Silex\SecurityTrait;

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
        $config = require_once __DIR__ . '/../config/config.php';
        foreach ($config as $key => $value) {
            $app[$key] = $value;
        }
        $app['debug'] = true;
    }

    public function loadProviders(Application $app)
    {
        $app->register(new Provider\MonologServiceProvider(), $app['monolog.config']);
        $app->register(new Provider\DoctrineServiceProvider());
        // connect to db
        \SimpleRecord\Record::connection($app['db']);

        $app['migrations.output_writer'] = new OutputWriter(
            function ($message) {
                $output = new ConsoleOutput();
                $output->writeln($message);
            }
        );
        $app['migrations.configuration'] = function () use ($app) {
            $configuration = new Configuration($app['db'], $app['migrations.output_writer']);
            $configuration->setMigrationsDirectory($app['migrations']['directory']);
            $configuration->setName($app['migrations']['name']);
            $configuration->setMigrationsNamespace($app['migrations']['namespace']);
            $configuration->setMigrationsTableName($app['migrations']['table_name']);
            $configuration->registerMigrationsFromDirectory($app['migrations']['directory']);

            return $configuration;
        };

        $app->register(new Provider\TwigServiceProvider(), [
            'twig.path' => $app['root.path'] . '/templates/',
            'twig.form.templates' => ['bootstrap_3_horizontal_layout.html.twig'],
            'twig.options' => [
                'cache' => $app['cache.path'].'/twig',
            ]
        ]);
        $app->register(new Provider\AssetServiceProvider(), [
            'assets.named_packages' => [
                'css' => [
                    'version' => 'v1',
                    'base_path' => '/asset/css'
                ],
                'js' => [
                    'version' => 'v1',
                    'base_path' => '/asset/js'
                ]
            ]
        ]);
        $app->register(new Provider\SecurityServiceProvider());

        $app->register(new Provider\RoutingServiceProvider());
//        $app->register(new Silex\Provider\HttpCacheServiceProvider(), [
//            'http_cache.cache_dir' => $app['cache.path'] . '/http',
//        ]);
//        $app->register(new Silex\Provider\HttpFragmentServiceProvider());

        $app->register(new Provider\ValidatorServiceProvider());
        $app->register(new Provider\LocaleServiceProvider());
        $app->register(new Provider\TranslationServiceProvider());
        $app->register(new Provider\CsrfServiceProvider());
        $app->register(new Provider\FormServiceProvider());

        $app->register(new Provider\ServiceControllerServiceProvider());
        $app->register(new Provider\SessionServiceProvider());

        $app->register(new \Paginator\Provider\PaginatorServiceProvider());

//        $app->register(new \Sorien\Provider\PimpleDumpProvider(), ['dump.path' => $app['root.path']]);
    }

    public function loadErrorHandler(Application $app)
    {
//        Debug::enable();
//        ErrorHandler::register();
//        ExceptionHandler::register();
//        $app->register(new WhoopsServiceProvider);

//        $app->error(function (Exception $e, $code) {
//            return new Response('We are sorry, but something went terribly wrong.');
//        },0);
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
//            exit;
//        });
    }

    public function loadModels(Application $app)
    {
        $app['post.model'] = $app->factory(function () use ($app) {
            return new Model\Post();
        });
    }

    public function loadRoutes(Application $app)
    {
        $app['home.controller'] = function () use ($app) {
            return new Controller\HomeController();
        };

        $app->get('/admin/post/', function () use ($app) {
            return $app->redirect('/post/page/1/');
        });
        $app->get('/admin/post/page/{page}/', "home.controller:postList")->assert('page', '\d+')->value('page', 1)->bind('post_list');
        $app->get('/admin/post/{id}/', "home.controller:postEdit")->assert('id', '\d+')->method('get|post')->bind('post');
        $app->get('/admin/post/add/', "home.controller:postEdit")->method('get|post')->bind('post_add');
        $app->get('/admin/{all}',  function () use ($app) {
            return $app->redirect('/admin');
        })->assert('all', '.*');


        $app->get('/', "home.controller:indexAction");
        $app->get('/record', "home.controller:record");
        $app->get('/test', "home.controller:test");
        $app->get('/test2', "home.controller:test2")->method('get|post');
        $app->get('/tracks', "home.controller:tracksAction");
        $app->get('/one/', function () use ($app) {
            return $app->json(['a' => 'b']);
        })->bind('sidebar');

        $app->get('/login', function (Request $request) use ($app) {
            return $app['twig']->render('login.twig', [
                'error' => $app['security.last_error']($request),
                'last_username' => $app['session']->get('_security.last_username'),
            ]);
        });


        $app['security.firewalls'] = [
            'secured_area' => [
                'pattern' => '^/admin',
                'form' => ['login_path' => '/login', 'check_path' => '/admin/check_login',
                    'always_use_default_target_path' => true,
                    'default_target_path' => 'post_list',
                ],
                'logout' => ['logout_path' => '/admin/logout', 'target' => '/', 'invalidate_session' => true],
                'users' => [
                    'admin' => ['ROLE_ADMIN', '5FZ2Z8QIkA7UTZ4BYkoC+GsReLf569mSKDsfods6LYQ8t+a8EW9oaircfMpmaLbPBh4FOBiiFyLfuZmTSUwzZg=='],
                ],
            ],
        ];
    }

}
