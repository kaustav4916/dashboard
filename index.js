var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').createServer(app);

app.use(express.static(path.join(__dirname,'')));

// const routes = require('./server/routes');
var PORT = process.env.PORT || 6000;
//const connect = require('./server/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use('/', routes);

// connect();
console.log();

app.get('/*',(req,res) => {
	console.log("Server hit-------------------");

//   res.sendFile(path.join(__dirname,'.index.html'));
});

 /*app.get('/quiz',(req,res) => {
 	console.log("----------------Quiz--------------");
 	$window.location.reload("quiz");
   res.sendFile(path.join(__dirname,'.quiz.html'));
 });*/

// app.get('/blog',(req,res) => {
// 	console.log("----------------Blog--------------");
//    res.sendFile(path.join(__dirname,'.blog.html'));
// });

http.listen(PORT,(req,res) => {
   console.log("Server is running on PORT: ", PORT);
});




