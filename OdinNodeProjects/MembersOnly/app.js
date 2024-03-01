var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
//var authRouter = require('./routes/auth');
var mongoose = require("mongoose")
var session = require("express-session")
var app = express();
async function dbConn() {
    await mongoose.connect("mongodb://localhost:27017")
}
dbConn()
  .then(() => console.log("connected"))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());



app.use('/', indexRouter);




module.exports = app;
