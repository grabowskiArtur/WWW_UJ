//this project is realized by node.js tutorial from : https://www.w3schools.com/nodejs/nodejs_modules.asp
// Home,intro,get started,modules
const http = require('http');
const date = require('./myfirstmodule');
const url = require('url');

// req -> argument that represents the request from the client, as an object
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); /*The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers. */
    res.write(req.url+ "<br>"); //write a response to the client
    //res.write("Actual date :" + date.myDateTime());

    const q = url.parse(req.url,true).query;
    const txt = q.year + " " + q.month + " " + q.day;

    res.end(txt); //end the response
}).listen(8080); //the server object listens on port 8080
// address to google chrome : http://localhost:8080/?year=2017&month=July&day=friday
