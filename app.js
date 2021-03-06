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

  server.post('/test', mogu.test);
  server.get('/test/:name', mogu.test);
  server.post('/test/:name', mogu.test);
  server.opts('/test/:name', cors.cors, function(req, res, next){
    res.send(200, {welcome: "test opts"});
  });

  server.post('/homepage', mogu.homepage);
  server.get('/homepage', mogu.homepage);
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
  server.post('/search_tips', mogu.searchTips);
  server.opts('/search_tips', cors.cors, function(req, res, next){
    console.log("search_tips");
    res.send(200, {welcome: 'search_tips'});
    //return next();
  });
  server.post('/play_search_hot', mogu.playSearchHot);
  server.opts('/play_search_hot', cors.cors, function(req, res, next){
    console.log("play_search_hot");
    res.send(200, {welcome: 'play_search_hot'});
    //return next();
  });
  server.post('/month_price', mogu.monthPrice);
  server.opts('/month_price', cors.cors, function(req, res, next){
    console.log("month_price");
    res.send(200, {welcome: 'month_price'});
    //return next();
  });
  server.post('/priceByDay', mogu.priceByDay);
  server.opts('/priceByDay', cors.cors, function(req, res, next){
    console.log("priceByDay");
    res.send(200, {welcome: 'priceByDay'});
    //return next();
  });
  server.post('/orderSubmit', mogu.orderSubmit);
  server.opts('/orderSubmit', cors.cors, function(req, res, next){
    console.log("orderSubmit");
    res.send(200, {welcome: 'orderSubmit'});
    //return next();
  });
  server.post('/orderSubmit2', mogu.orderSubmit2);
  server.opts('/orderSubmit2', cors.cors, function(req, res, next){
    console.log("orderSubmit2");
    res.send(200, {welcome: 'orderSubmit2'});
    //return next();
  });
  server.post('/productDetail', mogu.productDetail);
  server.opts('/productDetail', cors.cors, function(req, res, next){
    console.log("productDetail");
    res.send(200, {welcome: 'productDetail'});
    //return next();
  });



  server.listen(3900, function(){
    console.log('%s listening at %s', server.name, server.url);
  });
}
exports.start = start;

