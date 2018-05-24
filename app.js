var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(function(req,res,next){
    var tel = '18811719040';
    if(tel){
        res.locals.glo = {};
        res.locals.glo.tel = tel;
        // console.log('glosss',res);
        
    }
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//express static path
app.use(express.static(path.join(__dirname, 'public')));
app.get('/a.html',function(req,res){
  res.send('testaaa');
});

//只需要require路由模块
app.use(require('./routes/Routers'));

var server = app.listen(8089,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
    console.log()
}); 
module.exports = app;

