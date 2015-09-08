<?php

$root_path = realpath(__DIR__ . "/..");

return [
    'environment' => 'sandbox',
    'root.path' => $root_path,
    'cache.path' => $root_path . '/var/cache',
    'fragment.path' =>  $root_path . '/var/cache/_fragment',

    'monolog.level' => Monolog\Logger::DEBUG,

    'monolog.config' => [
        'monolog.logfile' => $root_path . '/var/logs/' . date('Y-m-d') . '.log',
        'monolog.level' => Monolog\Logger::NOTICE,
        'monolog.name' => 'application',
        'monolog.slack.key' => '',
    ],

    'cache.lifetime' => 0,

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
