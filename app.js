var restify = require('restify');
var mongodb = require('./public/models/mongodb');
var marketer = require('./public/marketer');
var login = require('./public/login');
var query = require('./public/query');
var memorySession = require('./public/cookie/memory_session');
var cors = require('./public/cors');
var pppark = require('./public/test');
var server = restify.createServer(
    {
      name: "MarketNode"
    }
);
function start() {
  console.log("#### starting ####");
  server.use(restify.gzipResponse());
  server.use(restify.bodyParser());
  server.use(restify.queryParser());
  restify.defaultResponseHeaders = function (data) {
    this.header('Access-Control-Allow-Origin', '*');
  };

  server.on('err', function (err) {
    mongodb.mongoose.disconnect(function (err) {
      console.log('mongoose was disconnected');
    });
    console.log('server has a error, and stoped');
  });

  //server.use(cors.cors);
  server.use(restify.CORS({
    origins: ['http://192.168.0.115:8000', 'http://192.168.0.115:8080', 'http://localhost:8000'],   // defaults to ['*']
    credentials: true, // defaults to false
    headers: ['X-Requested-With', 'content-type', 'cookie', 'Set-Cookie', 'accept'] // sets expose-headers
  }));

  server.get('/market_api/hello/:name', function respond(req, res, next) {
    res.send('hello ' + req.params.name);
  }); //for test
  //测试pppark
  server.get('/api/parking/:id', pppark.detail);
  server.get('api/parking/longitude/:longitude/latitude/:latitude/radius/:radius', pppark.carportNearby);

  //签到
  server.post('/market_api/signin', memorySession.checkSession, marketer.signin);
  server.opts('/market_api/signin', cors.cors, function(req, res, next){
    console.log("signin 请求options");
    res.send(200, {welcome: 'signin options success'});
    //return next();
  });

  //登录
  server.post('/market_api/login', login.login);
  server.del('/market_api/login', login.logout);
  server.opts('/market_api/login', cors.cors, function(req, res, next){
    console.log("login请求 options");
    res.send(200, {welcome: 'login options success'});
    //return next();
  });

  //查询
  server.get('/market_api/userlist', query.queryAllUsers);
  server.get('/market_api/signinrecords/:phone', query.querySigninRecords);
  server.listen(3900, function(){
    console.log('%s listening at %s', server.name, server.url);
  });
}
exports.start = start;

//var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//
//var routes = require('./routes/index');
//var users = require('./routes/users');
//
//var app = express();
//
//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//
//// uncomment after placing your favicon in /public
////app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.use('/', routes);
//app.use('/users', users);
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});
//
//
//module.exports = app;
