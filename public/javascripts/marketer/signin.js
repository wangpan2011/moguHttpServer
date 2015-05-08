/**
 * Created by wangpan on 5/8/15.
 */
exports.signin = function signin(req, res, next) {

    console.log("name=" + req.params.name);
    console.log("phone=" + req.params.phone);
    console.log("req=" + req);
    res.send(200, {welcome: 'hello world'});
    next();
}