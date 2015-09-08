#!/usr/bin/env bash

#echo Installing BowerPHP...
#
#composer global require "beelab/bowerphp 0.3.*@beta"
#echo "export PATH=~/.composer/vendor/bin:$PATH" > ~/.bash_profile
#source ~/.bash_profile


echo Installing Project...

cd /var/www
composer install
#bowerphp install