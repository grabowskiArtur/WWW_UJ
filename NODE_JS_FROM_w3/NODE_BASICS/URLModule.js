//look at de_FileSystemModule.js there will be better solution I think.

const url = require('url');
const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    const q = url.parse(req.url,true);
    const fileName = "." + q.pathname;
    console.log(fileName);
    console.log(req.url);
    console.log(q);

    fs.readFile(fileName,function (err, data) {
        if (err){
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end("404 Not found");
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);





//first part of tutorial.Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:
/*
const q = url.parse(adr,true);
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';

console.log("q.host      : " + q.host); //returns 'localhost:8080'
console.log("q.pathname  : " + q.pathname); //returns '/default.htm'
console.log("q.search    : " + q.search); //returns '?year=2017&month=february'

const qdata =  q.query;//returns an object: { year: 2017, month: 'february' }
console.log("qdata.month : " + qdata.month); //returns 'february'
*/
