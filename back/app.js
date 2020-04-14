const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const path = require('path');
const http = require('http');

const app = express();

const api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/stayhome',
  appId: 'stayhome',
  masterKey: 'aReallyBigSecret'
});

app.use('/parse', api);

const server = http.createServer(app);

server.listen(1337, function() {
  console.log('running on http://localhost:1337');
});


ParseServer.createLiveQueryServer(server);