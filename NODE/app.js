const http = require('http'); //tu jest js ale jest inteligent i nie musi

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //req obiekt zadania od klienta do serw
    //res na odwrot
/*    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');*/
    res.end('<h1> Ala ma kota </h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

