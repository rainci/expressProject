var express = require('express');
var router = express.Router();
var ApiMethod = require('../ApiMethod/ApiMethod');
var co = require('co');
router.get('/index.html',function(req,res){
    var pageData = {
        title:'lyx的express',
        show:{
            name:'lyxx',
            tel:'135678905'
        },
        // tel:'444345'
    };
    co(function *(){
        var data = {'a':'test'};
        data = yield ApiMethod.post('https://alpha-agw.jintoushou.com/gateway/index/info',{});
        console.log('lyxdata',data);
        pageData.data = data;
        res.render('../views/index',pageData);
    
    });
    // res.send('hello world!ss');
    // console.log('lyxxxxx',res)
});
module.exports = router;