/**
 * Created by wangpan on 5/12/15.
 */
var mongoose = require('./mongodb').mongoose;
var Schema = mongoose.Schema;
var marketerSchema = new Schema({
    name : String,
    phoneNumber : String,
    community : String,
    leaflet : Number,
    location : Array,
    address : String,
    signinDate : Date
});

var marketer = mongoose.model('marketers', marketerSchema);

module.exports = marketer;