const http = require('http'); //tu jest js ale jest inteligent i nie musi
const mongodb = require('mongodb').MongoClient;
const express = require('express');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    //req obiekt zadania od klienta do serw
    //res na odwrot
/*    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');*/
    fs.readFile('./index.html',function(error, data){
        if (error) throw error;
        console.log(data);
        res.write(data);
        res.end('');
    });
    /*res.end('');*/
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

