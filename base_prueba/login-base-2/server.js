require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
//const startdata = require('data')
const init_data = require('_helpers/data_init');

var async = require('async');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./controllers/users.controller'));
app.use('/locals', require('./controllers/local.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    //init_data.test1();
    
    
    init_data.population_start();
    
    
    
    
    
    
    console.log('Server listening on port ' + port);
});
