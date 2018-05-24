
var Client = require('aliyun-api-gateway').Client,
    systemConfig = require('../config/config').systemConfig,
    client = new Client(systemConfig.appKey,systemConfig.appSecret),
    co = require('co');
    client.stage = 'TEST';
exports.client = client;

exports.post = function(url,para){
    return co(function *(){
        var postdata = {
            headers: {
                'accept': 'application/json',
                'content-type': Client.CONTENT_TYPE_JSON,
                'jts-token': '',
                'jts-version': '1.0',
                'jts-appId': 'h5',
                'jts-channel': 'jts'
            },
            signHeaders: para._signHeaders || {},
            query: para.query || {},
            data: para.body || {},
            timeout: 15000
        };
        var result = {};
        try{
            result = yield client.post(url, postdata); 
        }catch (e){
            result.errCode = e.code;
            result.msg = e.msg;
        }
        return result;
    });
}