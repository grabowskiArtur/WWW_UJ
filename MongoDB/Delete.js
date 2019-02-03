const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


MongoClient.connect(url,function (err, db) {
    if (err) throw err;
    const dbo = db.db("BigDB2");
    const myObj = { name : "Artur", address: "fredry"};

    dbo.collection("Sasiedzi").insertOne(myObj,function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });

/*    const myQuery = {address: 'fredry'};
    dbo.collection("Sasiedzi").deleteOne(myQuery,function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        console.log(obj.result + " was deleted");
        db.close();
    });*/

    const myMultipleQuery = {name: 'Artur'};
    dbo.collection("Sasiedzi").deleteMany(myMultipleQuery,function (err, obj) {
        if (err) throw err;
        console.log(obj.result.n +" document deleted");
        console.log(obj.result.n);
        db.close();
    })
});
