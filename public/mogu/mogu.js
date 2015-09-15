var fs = require('fs');
delayTime = 0;
exports.test = function test(req, res, next) {
    console.log("request test");
    res.send(
        "hello " + req.params.name);
}

exports.homepage = function homepage(req, res, next) {
    console.log("request homepage: " + req);
    setTimeout(function() {
        res.send(JSON.parse(fs.readFileSync('./public/mogu/data/homepage.json', 'utf8')));
    }, delayTime);
}

exports.district = function district(req, res, next) {
    console.log("request district: " + req );
    setTimeout(function() {
        res.send(JSON.parse(fs.readFileSync('./public/mogu/data/district_product.json', 'utf8')));
    }, delayTime);
}

exports.districtInfo = function districtInfo(req, res, next) {
    console.log("request district info: " + req );
    setTimeout(function() {
        res.send(JSON.parse(fs.readFileSync('./public/mogu/data/district.json', 'utf8')));
    }, delayTime);
}
exports.citySearch = function citySearch(req, res, next) {
    console.log("request district info: " + req );
    setTimeout(function() {
        res.send(JSON.parse(fs.readFileSync('./public/mogu/data/city_search.json', 'utf8')));
    }, delayTime);
}
exports.searchTips = function searchTips(req, res, next) {
    console.log("request searchTips: " + req );
    setTimeout(function() {
        res.send(JSON.parse(fs.readFileSync('./public/mogu/data/search_tips.json', 'utf8')));
    }, delayTime);
}
exports.playSearchHot = function playSearchHot(req, res, next) {
    console.log("request searchTips: " + req );
    setTimeout(function() {
        res.send(JSON.parse(fs.readFileSync('./public/mogu/data/play_search_hot.json', 'utf8')));
    }, delayTime);
}
exports.monthPrice = function monthPrice(req, res, next) {
    console.log("request monthPrice: " + req );
    var result = JSON.parse(fs.readFileSync('./public/mogu/data/month_price.json', 'utf8'));
    result.result.month=req.params.month;
    setTimeout(function() {
        res.send(result);
    }, delayTime);
}
exports.priceByDay = function priceByDay(req, res, next) {
    console.log("request priceByDay: " + req );
    var result = JSON.parse(fs.readFileSync('./public/mogu/data/priceByDay.json', 'utf8'));
    setTimeout(function() {
        res.send(result);
    }, delayTime);
}
exports.orderSubmit = function orderSubmit(req, res, next) {
    console.log("request orderSubmit: " + req );
    var result = JSON.parse(fs.readFileSync('./public/mogu/data/orderSubmit.json', 'utf8'));
    setTimeout(function() {
        res.send(result);
    }, delayTime);
}