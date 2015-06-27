exports.cors  = function cors(req, res, next){
    console.log("add headers to allow cors");
    // Website you wish to allow to connect
    //如果有多个域名需要添加，可以设置一个白名单，然后读取request中的origin header并判断是否在白名单中，如果在，则添加到这里
    res.header('Access-Control-Allow-Origin', 'http://192.168.0.115:8000');
    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type, cookie, Set-Cookie');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);
    return next();
}
