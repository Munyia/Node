var http = require ('http')
var fs = require('fs');
var generator = require('generate-password');
var nodemailer = require('nodemailer');


http.createServer(function (req, res){
res.end('<h1>Hello Node!!!!</h1>');
}). listen(3000);
console.log('server listening on port 3000')


