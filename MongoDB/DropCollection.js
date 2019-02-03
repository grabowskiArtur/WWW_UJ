const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


MongoClient.connect(url,function (err, db) {
    if (err) throw err;
    const dbo = db.db("BigDB2");
/*
    dbo.collection("Sasiedzi").drop(function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });*/

    dbo.dropCollection("Sasiedzi").drop(function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    })
});