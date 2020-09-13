const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const routes = require('./routes/routes.js');
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();

var corsOptions = {
    origin: "htttp://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

//use local mongodb
/*
const local_url = 'mongodb://127.0.0.1:27017/boltesDB';
mongoose.connect(local_url, {
    useUnifiedTopology: true, useNewUrlParser: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.once('open', _ => {
    console.log('Database connected');
});

db.on('error', err => {
    console.log('Database connection error', err);
});
**/

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(`Not connected to database ${err}`);
    } else {
        console.log('Successfully connected to database');
    }
});

app.get('/', async (req, res) => {
    res.status(200).json({ message: 'Welcome to Boltes API' });
});

app.use('/api/emails', routes);

app.listen(port, (req, res) => {
    console.log(`Running server on port ${port}`);
});
