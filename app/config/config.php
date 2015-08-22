<?php

$root_path = realpath(__DIR__ . "/../..");
$app_path = $root_path . '/app';


return [
    'environment' => 'sandbox',
    'root.path' => $root_path,
    'app.path' => $app_path,
    'cache.path' => $app_path . '/cache',
    'fragment.path' => $app_path . '/cache/_fragment',

    'monolog.level' => Monolog\Logger::DEBUG,

    'monolog.config' => [
        'monolog.logfile' => $app_path . '/logs/' . date('Y-m-d') . '.log',
        'monolog.level' => Monolog\Logger::NOTICE,
        'monolog.name' => 'application',
        'monolog.slack.key' => '',
    ],

    'cache.lifetime' => 1,

    'amqp.options' =>
        [
            'host' => 'localhost',
            'port' => 5672,
            'user' => '',
            'password' => '',
        ],

    'swiftmailer.options' =>
        [
            'host' => 'mailtrap.io',
            'port' => 2525,
            'username' => '',
            'password' => '',
            'encryption' => null,
        ],
    'predis.db' => 0,
    'predis.options' => ['prefix' => 'sandbox:'],
    'predis.parametrs' =>
        [
            'scheme' => 'tcp',
            'host' => '127.0.0.1',
            'port' => 6379
        ],
    'pomm.config'=>[
        'pomm.configuration' =>
            [
                'db' => [
                    'dsn' => 'pgsql://postgres:dqk68MSR7iQJQJoeSU@localhost:5432/silex',
                    'class:session_builder' => '\PommProject\ModelManager\SessionBuilder',
                    'pomm:default' => true,

                ],

            ],
        'pomm.logger.service' => 'monolog',
    ]
];
