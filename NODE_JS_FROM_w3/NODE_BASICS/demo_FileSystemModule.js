const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
    //Create a Node.js file that reads the HTML file, and return the content:
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);


// you could find more information on :https://www.w3schools.com/nodejs/nodejs_filesystem.asp
fs.appendFile('newFile.txt','Ala ma kota2',function (err) {
    if (err)
    {q
        throw err;
    }
    console.log("saved");
});

fs.unlink('newFile.txt', function (err) {
    if (err) {
        throw err;
    }
    console.log("File deleted!");
});

fs.rename('myFile1.txt', 'myFile2.txt',function (err) {
    if (err){
        throw err;
    }
    console.log('File renamed!');

});

/*// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
fsopen('newFile2.txt','w',function (err, file) {
    if (err) {
        throw err;
    }
    console.log('newFile2.txt saved!');
})*/

