coworker
========

Set up using docker
-------------------


`docker-compose -f local.yml up`

You will get error(Nor sure how to auto that step???):

Run:
Database name: `postgres`, password: `postgres`

`docker-compose -f local.yml exec postgres bash`

```bash# psql -U postgres -W
password: postgres
postgres=# \c coworker
coworker=# create extension hstore;
coworker=# \q
```

Then again run:
`docker-compose -f local.yml up`

Open in browser:

http://0.0.0.0:8000
