<?php
//ini_set('intl.default_locale','en-GB');
//phpinfo();exit;
require_once(__DIR__ . '/../vendor/autoload.php');
$app = new \App\Application();

//print_r(get_included_files());
return $app;
