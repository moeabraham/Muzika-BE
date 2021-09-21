var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var tracksRouter = require('./routes/tracks');

var app = express();

require('dotenv').config();
require('./config/database')

app.use(logger('dev'));
app.use(express.json());
app.use(cors());


app.use('/api/tracks', tracksRouter);

module.exports = app;
