/**
 * Created by beethoven on 1/17/15.
 */
var cookie = require('./cookie');

// session expire time setting
var EXPIRE_TIME = 30 * 60 * 1000;

// cache all session in server
var _sessions = {};

// GC the expire sessions
setInterval( function() {
    for ( var id in _sessions ) {
        if ( !_sessions.hasOwnProperty(id) ) {
            continue;
        }
        if (new Date() - _sessions[id].timestamp > EXPIRE_TIME) {
            delete _sessions[id];
        }
    }
}, 1000);

function createSID(pre) {
    pre = (pre) ? pre : 'SESS';
    var time = (new Date()).getTime() + '';
    var id = pre + '_' + (time).substring(time.length - 6) + '_' + (Math.round(Math.random() * 1000));
    return id;
}

var createSession = function(sID, userID) {
    var session = {
        SID: sID,
        userID : userID,
        timestamp: new Date()
    }
    return session;
}

// define actions of session object
var session = function(_sessions, sID) {
    this.poke = function() {
        _sessions[sID].timestamp = new Date();
    };
    this.set = function(key, value) {
        _sessions[sID][key] = value;
        this.poke();
    };
    this.get = function(key) {
        return _sessions[sID][key];
        this.poke();
    };
    this.del = function(key) {
        delete _sessions[sID][key];
        this.poke();
    };
    this.destory = function() {
        delete _sessions[sID];
    };
    this.isExpired = function() {
        var expired = new Date() - this.timestamp > EXPIRE_TIME;
        if(!expired){
            this.poke();
        }
        return expired;
    };
}

exports.getHeaderSID=function (req){
    var _header = req.headers;
    var cookies = {};
    if ( _header.cookie ) {
        cookies = cookie.parseCookie(_header.cookie);
    }

    var sID;
    for (var i in cookies) {
        if (i == 'sID') {
            sID = cookies[i];
            break;
        }
    }
    return sID;
}

// description session start
exports.startSession = function(req, res, callback, userID) {
    var sID = exports.getHeaderSID(req);
    if (!sID || typeof _sessions[sID] == 'undefined') {
        sID = createSID();
        _sessions[sID] = createSession(sID, userID);
    }
    res.setHeader('Set-Cookie', ['sID=' + sID]);
    callback(sID);
}

exports.checkSession = function(req, res, next) {
    var sID = exports.getHeaderSID(req);
    if (!sID || typeof _sessions[sID] == 'undefined' || new session(_sessions, sID).isExpired()) {
        res.json(400, {errorCode : 1000, message : 'session失效'});
        return;
    }
    req.sessionUserID = _sessions[sID].userID;
    return next();
}

exports.destorySession = function(req) {
    var sID = exports.getHeaderSID(req);
    if (sID && typeof _sessions[sID] != 'undefined') {
        new session(_sessions, sID).destory();
    }
}