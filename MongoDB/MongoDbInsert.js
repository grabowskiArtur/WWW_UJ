const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";


//1 element
MongoClient.connect(url,function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb2");
    const myObj = {name : "Company Inc", address : "Highway 37" };
    dbo.collection("customers").insertOne(myObj,function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const bigDB = db.db("BigDB2");
    const myBigObject = [
        {name : "Artur", address: "golaska 1"},
        {name : "Kazek" , address:  "Przykopy 14a"},
        {name : "Artur", address: "fredry"},
        {name : "Natalia", address: "Podleska 14a"}
    ];
    bigDB.collection("Sasiedzi").remove();
    bigDB.collection("Sasiedzi").insertMany(myBigObject, function (err, res) {
        if (err) throw err;
        console.log("MultipleDatabase inserted");
        console.log("Number of documents : " + res.insertedCount);
        console.log(res);
    })
    db.close();
    // db.dropDatabase(); it does not work with easy version of MongoDB
});

//to specify id
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { _id: 154, name: 'Chocolate Heaven'},
        { _id: 155, name: 'Tasty Lemon'},
        { _id: 156, name: 'Vanilla Dream'}
    ];
    dbo.collection("products").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});*/
