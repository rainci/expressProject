var express = require('express');
var router = express.Router();
router.get('/index.html',function(req,res){
    var pageData = {
        title:'lyx的express',
        show:{
            name:'lyxx',
            tel:'135678905'
        },
        // tel:'444345'
    }
    res.render('../views/index',pageData);
    // res.send('hello world!ss');
    // console.log('lyxxxxx',res)
});
module.exports = router;