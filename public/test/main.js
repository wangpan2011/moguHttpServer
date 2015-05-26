/**
 * Created by wangpan on 5/7/15.
 */
var counter = require('./counter');
console.log(counter.count());
console.log(counter.count());
console.log(counter.count());

var restify = require('restify');
var server = restify.createServer();
server.use(restify.bodyParser());//将post请求的body数据转化到req.params
server.use(restify.queryParser());//将url？后的参数转化到req.params
server.get('/hello/:name', function respond(req, res, next) {
    res.send('hello ' + req.params.name);
});
server.post('/signin', promoterSingin.signin);
server.listen(3900, function(){
    console.log('%s listening at %s', server.name, server.url);
});