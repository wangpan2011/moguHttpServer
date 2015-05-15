/**
 * Created by wangpan on 5/12/15.
 */
var mongoose = require('./mongodb').mongoose;
var Schema = mongoose.Schema;
var marketerSchema = new Schema({
    name : String,
    phoneNumber : String
});

var marketer = mongoose.model('marketers', marketerSchema);

module.exports = marketer;