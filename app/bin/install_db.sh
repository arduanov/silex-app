#!/usr/bin/env bash

DBNAME='silex';


sudo service postgresql restart;
psql -U postgres -c "DROP DATABASE IF EXISTS $DBNAME;" && createdb -U postgres $DBNAME;
pg_restore -U postgres -d $DBNAME --format c ../data/db.dump
