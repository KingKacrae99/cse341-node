const express = require('express');
const bodyParser = require('body-parser')

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
const PORT = 3000

/*****************************
 * Server listener
 ****************************/
app.listen(PORT, () => {
    console.log("Web Server is listening at port " + PORT)
});