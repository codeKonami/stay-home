# stay-home
Display your distance to your home and people outdoors


## Dev Setup Env
```sh
docker run -d -p 27017:27017 --name parse-mongo mongo
```

```sh
docker run -d -p 6379:6379 --name parse-redis redis
```

## Dashboard Setup Env
```sh
docker run -d \
  -e PARSE_DASHBOARD_CONFIG='{"apps":[{"appId":"stayhome","serverURL":"http://localhost:1337/parse","masterKey":"aReallyBigSecret","appName":"stayhome"}],"users":[{"user":"admin","pass":"admin"}]}' \
  -e PARSE_DASHBOARD_ALLOW_INSECURE_HTTP=1  \
  -p 4040:4040                      \
  --name parse_dashboard            \
  parseplatform/parse-dashboard
```

## Backend

```sh
cd back
yarn
```

Then

```sh
yarn start
```

## Frontend

```sh
cd front
yarn
```

Then

```sh
yarn start
```

