/**
 * Created by wangpan on 5/8/15.
 */
//签到
var Marketer = require('./../models/Marketers');
exports.signin = function signin(req, res, next) {

    console.log("name=" + req.sessionUser.name);
    console.log("phone=" + req.sessionUser.phoneNumber);
    console.log("req=" + req);
    new Marketer({
        name : req.sessionUser.name,
        phoneNumber : req.sessionUser.phoneNumber,
        community : req.params.community,
        leaflet : req.params.leaflet,
        location : req.params.location,
        address : req.params.address,
        signinDate : new Date()
    }).save(function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(200, {welcome: 'signin success'});
            }
        });
    next();
}