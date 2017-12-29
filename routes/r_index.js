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
    var data={};
    co(function *(){
        data = yield ApiMethod.post('https://alpha-agw.jintoushou.com/gateway/problem/categories',{});
        console.log('lyxdata',data);
        if(data.data && data.data.length){
            pageData.data = data.data;
        }else{
            if (data.errCode === 400 || data.errCode === '400'){
                console.log('格式错误',data.errCode)
            }
            pageData.data = [];
        }
        res.render('../views/index',pageData);
    
    });
});
module.exports = router;