var express = require('express');
var router = express.Router();
// var ApiMethod = require('../ApiMethod/ApiMethod');
var co = require('co');
var axios = require('axios');
// import axios from 'axios'
router.get('/index.html',function(req,res){
    // var pageData = {
    //     title:'lyx的express',
    //     show:{
    //         name:'lyxx',
    //         tel:'135678905'
    //     },
    //     // tel:'444345'
    // };
    // var data={};
    co(function *(){

    //     data = yield ApiMethod.post('https://alpha-agw.jintoushou.com/gateway/problem/categoriesss',{});
    //     console.log('lyxdata',data);
    //     if(data.data && data.data.length){
    //         pageData.data = data.data;
    //     }else{
    //         if (data.errCode === 400 || data.errCode === '400'){
    //             console.log('格式错误',data.errCode)
    //         }
    //         pageData.data = [];
    //     }
        // axios.post('http://192.168.130.103:88/API/getdata1.json')//URL已增加时间戳
        axios.post('http://192.168.130.155:8089/test1.json')//URL已增加时间戳
        .then(function (response) {
        console.log('success',response.status,response.data)
        
        })
        .catch(function (error) {
        console.error('console-error.config', error);

        });
        res.render('../views/index');
    
    });
});
module.exports = router;