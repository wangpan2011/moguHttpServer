var restify = require('restify');
var cors = require('./public/cors');
var mogu = require('./public/mogu');
var server = restify.createServer(
    {
      name: "TestNodeServer"
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
    console.log('server has a error, and stoped');
  });

  //server.use(cors.cors);
  server.use(restify.CORS({
    origins: ['http://192.168.0.115:8000', 'http://192.168.0.115:8080', 'http://localhost:8000'],   // defaults to ['*']
    credentials: true, // defaults to false
    headers: ['X-Requested-With', 'content-type', 'cookie', 'Set-Cookie', 'accept'] // sets expose-headers
  }));

  server.get('/test/:name', mogu.test);

  server.post('/homepage', mogu.homepage);
  server.opts('/homepage', cors.cors, function(req, res, next){
    console.log("login请求 options");
    res.send(200, {welcome: 'login options success'});
    //return next();
  });

  server.post('/district', mogu.district);
  server.opts('/district', cors.cors, function(req, res, next){
    console.log("login请求 options");
    res.send(200, {welcome: 'login options success'});
    //return next();
  });
  server.post('/district_info', mogu.districtInfo);
  server.opts('/district_info', cors.cors, function(req, res, next){
    console.log("login请求 options");
    res.send(200, {welcome: 'login options success'});
    //return next();
  });

  server.post('/city_search', mogu.citySearch);
  server.opts('/city_search', cors.cors, function(req, res, next){
    console.log("city search");
    res.send(200, {welcome: 'city search'});
    //return next();
  });



  server.listen(3900, function(){
    console.log('%s listening at %s', server.name, server.url);
  });
}
exports.start = start;

