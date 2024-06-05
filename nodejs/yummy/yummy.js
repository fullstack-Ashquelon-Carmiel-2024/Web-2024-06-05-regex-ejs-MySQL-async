const express = require('express');
const mysql = require('mysql2');
const path = require('path');
require('ejs');

const getHomePage = require('./model/home');

/********** VARIABLES **********/
let port = process.env.PORT ? process.env.PORT : 3053;

/*********** DB CONNECTION **********/
const db = mysql.createConnection({
    host: 'localhost', // or '127.0.0.1'
    port: 3306,
    database: 'yummy',
    user: 'root', // TBD: create new, less powerful user
    password: ''
})

db.connect(err => {

    if (err) {
        // Connection to DB is critical for our app,
        // so if it has failed, we should treat it 
        // and not start the server
        throw(err)
    }

    console.log('I fill lucky today. I\'ve connected to DB!!!');

})

/***** CREATE THE SERVER ******/
const app = express();

/***** VARIABLES OF EXPRESS ******/

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

/******* ROUTING *********/
app.get('/',getHomePage);

/*********LISTENER *********/
app.listen(port, () => {

    console.log(`Listening on the port ${port}`)

})