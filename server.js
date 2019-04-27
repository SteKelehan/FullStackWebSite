var express = require('express');
var app = express();
var path = require('path')

// localhost:8080 --> can use process.env.PORT (system picks port) 
var port = 8080;

// telling sever what view engine
app.set('view engine', 'ejs');

// pointing app to where are views are (gets dir name and /client/views)
app.set('views', path.resolve(__dirname, 'client', 'views'));

// default (main) app page to be index.ejs (ejs is rendered as html)
app.get('/', function (req, res) {
    res.render('index.ejs');
})

// Telling server where we are goign to be hosting are static files
app.use(express.static(path.resolve(__dirname, 'client')));

app.listen(port, function () {
    console.log('SERVER RUNNING... PORT: ' + port);
})