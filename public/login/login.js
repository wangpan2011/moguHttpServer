/**
 * Created by wangpan on 5/15/15.
 */
/**
 * 登录
 */

var MemorySession = require('../cookie/memory_session');
var User = require('../models/User');

function login(req, res, next){
    User.findOne(
        {
            phoneNumber : req.params.phone,
            password : req.params.passwd
        },
        'phoneNumber name',
        function(err, user){
            next.ifError(err);
            if(user == null){
                res.json(400, {errorCode: 10000, message : '用户名或密码错误'});
                return;
            }
            MemorySession.startSession(req, res,
                function(sessionID){
                    res.json(200, {sessionID : sessionID, user : user});
                    return;
                },
                user._id
            );

        });
}

function logout(req, res, next){
    MemorySession.destorySession(req);
    res.send(200);
}

exports.login = login;
exports.logout = logout;
