const express = require('express');
const mongo = require('./mongo');
const app = express();
const mongoClient = mongo.createClient({
  host: 'mongo',
  port: 6379
});

app.listen(5000, function() {
    console.log('Web application is listening on port 5000');
});