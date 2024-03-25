var http = require ('http')
var fs = require('fs');
var generatePassword = require('generate-password');
var nodemailer = require('nodemailer');


http.createServer(function (req, res){
res.end('Hello World\n');
}). listen(8081);
console.log('server listening on port 8081')


