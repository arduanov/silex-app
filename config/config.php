<?php

$root_path = realpath(__DIR__ . "/..");

return [
    'debug' => false,
    'root.path' => $root_path,
    'cache.path' => $root_path . '/var/cache',
    'fragment.path' => $root_path . '/var/cache/_fragment',
    'paginator.per_page' =>5,
    'monolog.level' => Monolog\Logger::DEBUG,

    'monolog.config' => [
        'monolog.logfile' => $root_path . '/var/logs/' . date('Y-m-d') . '.log',
        'monolog.level' => Monolog\Logger::DEBUG,
        'monolog.name' => 'application',
        'monolog.slack.key' => '',
    ],

    'migrations'=>[
        'directory'=>$root_path.'/src/Data/Migrations',
        'name'=>'Migrations',
        'namespace'=>'App\Data\Migrations',
        'table_name'=>'migration_versions',
    ],
    'cache.lifetime' => 0,

    'swiftmailer.options' =>
        [
            'host' => 'mailtrap.io',
            'port' => 2525,
            'username' => '',
            'password' => '',
            'encryption' => null,
        ],
    'db.options' => [
        'driver' => 'pdo_pgsql',
        'dbname' => 'silex',
        'host' => 'localhost',
        'user' => 'postgres',
        'password' => 'dqk68MSR7iQJQJoeSU',
    ]
];
