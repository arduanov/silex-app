#!/usr/bin/env bash
# DEBIAN_FRONTEND=noninteractive

apt-get update
timedatectl set-timezone Europe/Moscow
apt-get install -yqq git mc;

##
# Postgresql
##
echo Installing Postgresql...

apt-get install -yqq postgresql;
sed -i "s/^local   all             postgres                                peer/local   all             postgres                                trust/" /etc/postgresql/9.4/main/pg_hba.conf |grep "^local   all             postgres                                trust" /etc/postgresql/9.4/main/pg_hba.conf
service postgresql restart;
psql -U postgres -c "ALTER USER postgres WITH ENCRYPTED PASSWORD 'dqk68MSR7iQJQJoeSU';";

##
# доступ к базе для всех по паролю
##

echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/9.4/main/pg_hba.conf
sed -i "s/^listen_addresses='\*'//" /etc/postgresql/9.4/main/postgresql.conf
echo "listen_addresses='*'" >> /etc/postgresql/9.4/main/postgresql.conf
service postgresql restart;


echo Installing PHP...

apt-get install -yqq php5-cli php5-fpm php5-curl php5-pgsql php5-mcrypt php5-intl libxrender1 libfontconfig1
cp /vagrant/vagrant/config/php.ini /etc/php5/fpm/conf.d/
cp /vagrant/vagrant/config/php.ini /etc/php5/cli/conf.d/



echo Installing Nginx...

apt-get install -yqq nginx
cp /vagrant/vagrant/config/nginx/* /etc/nginx/sites-enabled/
service nginx restart


echo Installing Composer...

curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer


#su vagrant -l /vagrant/vagrant/project.sh
