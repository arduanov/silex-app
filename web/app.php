<?php
ini_set("display_errors", 'On');

$app = require_once __DIR__.'/../src/bootstrap.php';
$app->run();
//$app['http_cache']->run();
