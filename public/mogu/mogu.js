var fs = require('fs');
exports.test = function test(req, res, next) {
    console.log("request test");
    res.send(
        "hello " + req.params.name);
}

exports.homepage = function homepage(req, res, next) {
    console.log("request homepage: " + req);
    setTimeout(function() {
        res.send(JSON.parse(fs.readFileSync('./public/mogu/data/homepage.json', 'utf8')));
    }, 5000);
}

exports.district = function district(req, res, next) {
    console.log("request district: " + req );
    setTimeout(function() {
        res.send(JSON.parse(fs.readFileSync('./public/mogu/data/district_product.json', 'utf8')));
    }, 5000);
}
