const uc = require('upper-case');
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(uc("Hello Worlds!"));
    res.end();
}).listen(8080);
