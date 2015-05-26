var User = require('../models/User');
var Marketer = require('../models/Marketers');
function queryAllUsers(req, res, next) {
    console.log("queryAllUsers.");
    User.find({},
        '_id, phoneNumber name',
        function (err, users) {
        next.ifError(err);
        var userMap = {};

        users.forEach(function (user) {
            userMap[user._id] = user;
        });

        res.send(userMap);
    });
}
function querySigninRecords(req, res, next) {
    console.log("querySigninRecords.");
    Marketer.find({phoneNumber : req.params.phone},
        function (err, records) {
            next.ifError(err);
            var recordMap = {};

            records.forEach(function (record) {
                recordMap[record._id] = record;
            });

            res.send(recordMap);
        });
}
exports.queryAllUsers = queryAllUsers;
exports.querySigninRecords = querySigninRecords;