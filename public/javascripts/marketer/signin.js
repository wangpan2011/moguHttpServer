/**
 * Created by wangpan on 5/8/15.
 */
var Marketer = require('./../models/Marketers');
exports.signin = function signin(req, res, next) {

    console.log("name=" + req.params.name);
    console.log("phone=" + req.params.phone);
    console.log("req=" + req);
    new Marketer({
        name : req.params.name,
        phoneNumber : req.params.phone
    }).save(function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(200, {welcome: 'signin success'});
            }
        });
    next();
}