#!/usr/bin/env bash

DBNAME='silex';

# destroy all connections to db
sudo service postgresql restart;
# create db
psql -U postgres -c "DROP DATABASE IF EXISTS $DBNAME;" && createdb -U postgres $DBNAME;
#pg_restore -U postgres -d $DBNAME --role=postgres -O --format c ./app/data/db.dump