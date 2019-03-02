let express = require('express');
let router = express.Router();
const fs = require("fs");
//let temp,humidity;
/* GET home page. */
router.get('/', function(req, res, next) {
//router.get('/test/:temp/:humidity/', function(req, res, next) {
  //console.log(req.params.temp);

  const dirToFile = __dirname+"/data.json"
  console.log(dirToFile);
  fs.readFile(dirToFile,function(err, file){
    let obj = JSON.parse(file)
    console.log(obj);
    //res.json(obj);
    //res.download("/data.json","ala",err, file);
    res.render('index', obj ); //wez szablon srony i wstaw dane z 2 obiektu
  })
    //res.render('index', { title: 'Express' , name : 'Artur'}); //wez szablon srony i wstaw dane z 2 obiektu

});

module.exports = router;
