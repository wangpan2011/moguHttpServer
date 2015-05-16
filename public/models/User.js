/**
 * Created by wangpan on 5/15/15.
 */
var mongoose = require('./mongodb').mongoose;
var Schema = mongoose.Schema;
var userSchema = new Schema({
    phoneNumber : String,
    password : String,
    name : String
});

var user = mongoose.model('user', userSchema);

module.exports = user;