const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config()
/*******************************************
 * Creating an express application
 ******************************************/
const app = express();
const router = require('./router')

/*******************************************
 * middleware 
 ******************************************/
//Application
app.use((req, res, next) => {
    console.log("Time:", Date.now());
    next();
});

/***************************************
 * Add the Body Parser to the app
 **************************************/
app.use(bodyParser.json());

/************************************
 * Routing
 *********************************/
app.use('/', router)

/****************************
 * Running Port 
 ***************************/
const port = process.env.PORT

/*****************************
 * Server listener
 ****************************/
app.listen(port, () => {
    console.log("Web Server is listening at port " + port)
});