const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload'){ //The file will be uploaded, and placed on a folder:
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            const old_path = files.filetoupload.path;
            const new_path = 'C:/Users/artek/OneDrive/Desktop/studia/semestr 3/zaaw www/REPO WEBSTORM/WWW_UJ/NODE_JS_FROM_w3/NODE_BASICS/' + files.filetoupload.name;
            fs.rename(old_path, new_path, function (err) {
               if (err) {
                   throw err;
               }
                res.write('File uploaded and moved!');
                res.end();
            });
        })
    } else { //This code will produce an HTML form: zrobilo htmla do wrzucania pli z dwoma buttonami<input> co ciekawe sam przetlumacyzyl na polski
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">'); // skomentowane w pliku pytania i odpowiedzi
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);