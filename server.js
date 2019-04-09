
let express = require('express'),
path = require('path'),
app = express(),
 
// getting port this way
port = process.env.PORT || process.argv[2] || 8080;
 
var bodyParser = require('body-parser')
// using the JSON body parser

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.use(express.static('public'))

require('./app/routing/htmlroutes.js')(app);

require('./app/routing/apiroutes.js')(app);

app.listen(port, function () {
    console.log('our app is alive on: ' + port);
});

