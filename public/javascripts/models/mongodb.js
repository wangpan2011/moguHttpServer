/**
 * Created by wangpan on 5/12/15.
 */
var mongoose = require('mongoose');
var dbOptions = {
    db: {native_parser: true},
    server: {poolSize: 5},
    replset: {rs_name: 'marketerdb_replset'}
    //user: 'pppadmin',
    //pass: 'qazwsxedc'
};

//数据库链接错误处理
mongoose.connection.on('err', function (err) {
    console.error(err.message);
});
mongoose.connection.on('open', function () {
    console.info('数据库连接已经打开');
});
//链接数据库
mongoose.connect('mongodb://localhost/marketers', dbOptions);
//mongoose.connect('mongodb://182.92.241.79:10000/ppparking0428', dbOptions);
exports.mongoose = mongoose;