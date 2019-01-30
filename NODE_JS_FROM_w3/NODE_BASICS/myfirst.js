//this project is realized by node.js tutorial from : https://www.w3schools.com/nodejs/nodejs_modules.asp
// Home,intro,get started,modules
const http = require('http');
const date = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write();
    res.end("Actual date :" + date.myDateTime());
}).listen(8080);

