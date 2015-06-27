exports.detail = function detail(req, res, next) {
    console.log("request detail");
    res.send(
        {
            "parking": {
                "_id": "55408e92c1c4f68635e5371d",
                "user": "55408e48c1c4f68635e5371c",
                "type": 0,
                "state": 2,
                "price": 10,
                "desc": "地上车位 离地铁近",
                "name": "富力·爱丁堡公馆",
                "address": "朝阳区白家庄路1号",
                "startDate": "2015-05-01T00:00:00.000Z",
                "endDate": "2015-08-31T00:00:00.000Z",
                "startTime": "08:30",
                "endTime": "18:00",
                "leastDays": 30,
                "createTime": "2015-04-29T07:56:02.241Z",
                "soldToDate": "2015-06-02T00:00:00.000Z",
                "orderCount": 4,
                "__v": 0,
                "dayOfWeek": [1, 2, 3, 4],
                "location_gcj02": {"type": "Point", "coordinates": [116.45910823, 39.92979904]},
                "location": {"type": "Point", "coordinates": [116.465722, 39.93546]}
            }
        });
}
exports.carportNearby = function carportNearby(req, res, next) {
    console.log("request carportNearby");
    res.send(
        {
            "longitude": 116.467545,
            "latitude": 39.935643,
            "radius": 400,
            "parkings": [{
                "dis": 90.51144726322346,
                "obj": {
                    "user": "5573bd781e881f6f4611ca03",
                    "type": 0,
                    "state": 1,
                    "price": 5,
                    "name": "白家庄北里小区",
                    "address": "东三环长虹桥兆龙后身白家庄北里",
                    "startDate": "2015-06-18T00:00:00.000Z",
                    "endDate": "2015-08-06T00:00:00.000Z",
                    "startTime": "08:30",
                    "endTime": "18:00",
                    "leastDays": 1,
                    "createTime": "2015-06-17T08:48:27.799Z",
                    "soldToDate": "2015-06-18T00:00:00.000Z",
                    "orderCount": 0,
                    "__v": 0,
                    "dayOfWeek": [1, 2, 3, 4, 5],
                    "location_gcj02": {"type": "Point", "coordinates": [116.46060045, 39.93075198]},
                    "location": {"type": "Point", "coordinates": [116.4672130378586, 39.93641520956359]},
                    "_id": "5581345b46e9cbfe46ba435d"
                }
            }, {
                "dis": 156.93202568891775,
                "obj": {
                    "user": "556be732e304e2a54c0836c0",
                    "type": 1,
                    "state": 1,
                    "price": 10,
                    "desc": "",
                    "name": "富力·爱丁堡公馆",
                    "address": "朝阳区白家庄路1号",
                    "startDate": "2015-06-02T00:00:00.000Z",
                    "endDate": "2015-06-05T00:00:00.000Z",
                    "leastDays": 1,
                    "createTime": "2015-06-01T05:10:02.529Z",
                    "soldToDate": "2015-06-02T00:00:00.000Z",
                    "orderCount": 0,
                    "__v": 0,
                    "dayOfWeek": [],
                    "location_gcj02": {"type": "Point", "coordinates": [116.45910823, 39.92979904]},
                    "location": {"type": "Point", "coordinates": [116.465722, 39.93546]},
                    "_id": "556be92ae304e2a54c0836c3"
                }
            }, {
                "dis": 156.93202568891775,
                "obj": {
                    "user": "55408e48c1c4f68635e5371c",
                    "type": 0,
                    "state": 2,
                    "price": 10,
                    "desc": "地上车位 离地铁近",
                    "name": "富力·爱丁堡公馆",
                    "address": "朝阳区白家庄路1号",
                    "startDate": "2015-05-01T00:00:00.000Z",
                    "endDate": "2015-08-31T00:00:00.000Z",
                    "startTime": "08:30",
                    "endTime": "18:00",
                    "leastDays": 30,
                    "createTime": "2015-04-29T07:56:02.241Z",
                    "soldToDate": "2015-06-02T00:00:00.000Z",
                    "orderCount": 4,
                    "__v": 0,
                    "dayOfWeek": [1, 2, 3, 4],
                    "location_gcj02": {"type": "Point", "coordinates": [116.45910823, 39.92979904]},
                    "location": {"type": "Point", "coordinates": [116.465722, 39.93546]},
                    "_id": "55408e92c1c4f68635e5371d"
                }
            }, {
                "dis": 189.11788924660544,
                "obj": {
                    "user": "5573bd781e881f6f4611ca03",
                    "type": 0,
                    "state": 1,
                    "price": 5,
                    "desc": "g",
                    "name": "宝蓝荣安大厦",
                    "address": "东三环北路17",
                    "startDate": "2015-06-18T00:00:00.000Z",
                    "endDate": "2015-10-18T00:00:00.000Z",
                    "startTime": "08:30",
                    "endTime": "18:00",
                    "leastDays": 5,
                    "createTime": "2015-06-17T10:23:35.550Z",
                    "soldToDate": "2015-06-18T00:00:00.000Z",
                    "orderCount": 0,
                    "__v": 0,
                    "dayOfWeek": [1, 2, 3, 4, 5],
                    "location_gcj02": {"type": "Point", "coordinates": [116.46093849, 39.9316777]},
                    "location": {"type": "Point", "coordinates": [116.4675506210693, 39.93734186943695]},
                    "_id": "55814aa746e9cbfe46ba436d"
                }
            }, {
                "dis": 194.66657736672101,
                "obj": {
                    "user": "55408e48c1c4f68635e5371c",
                    "type": 1,
                    "state": 1,
                    "price": 7,
                    "desc": "",
                    "name": "君汇雅居",
                    "address": "北京市朝阳区白家庄北里3号",
                    "startDate": "2015-05-01T00:00:00.000Z",
                    "endDate": "2015-05-31T00:00:00.000Z",
                    "leastDays": 0,
                    "createTime": "2015-04-29T08:01:19.171Z",
                    "soldToDate": "2015-05-01T00:00:00.000Z",
                    "orderCount": 0,
                    "__v": 0,
                    "dayOfWeek": [],
                    "location_gcj02": {"type": "Point", "coordinates": [116.45971103, 39.93145736]},
                    "location": {"type": "Point", "coordinates": [116.466324, 39.93712]},
                    "_id": "55408fcfc1c4f68635e53724"
                }
            }, {
                "dis": 194.66657736672101,
                "obj": {
                    "user": "556bed4ac59c33384d97291d",
                    "type": 1,
                    "state": 1,
                    "price": 10,
                    "desc": "",
                    "name": "君汇雅居",
                    "address": "北京市朝阳区白家庄北里3号",
                    "startDate": "2015-06-02T00:00:00.000Z",
                    "endDate": "2015-06-05T00:00:00.000Z",
                    "leastDays": 1,
                    "createTime": "2015-06-01T05:28:48.426Z",
                    "soldToDate": "2015-06-02T00:00:00.000Z",
                    "orderCount": 0,
                    "__v": 0,
                    "dayOfWeek": [],
                    "location_gcj02": {"type": "Point", "coordinates": [116.45971103, 39.93145736]},
                    "location": {"type": "Point", "coordinates": [116.466324, 39.93712]},
                    "_id": "556bed90c59c33384d97291e"
                }
            }]
        });
}
