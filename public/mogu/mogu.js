var fs = require('fs');
delayTime = 1000;
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