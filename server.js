var express = require('express');
var app =express();
var path = require('path');
app.use(express.static(__dirname +'/data'));
app.use(express.static(__dirname +'/c3'));
app.use('/',function(req,res){
	res.sendFile(__dirname +'/chart.html');
});
app.listen(8080);
