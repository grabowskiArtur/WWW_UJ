const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("BigDB2");
    const query = {address: "fredry"};
    dbo.collection("Sasiedzi").find(query,{projection : {_id : 0}}).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    })

    const regularExpressionQuery = {address: /^g/};
    dbo.collection("Sasiedzi").find(regularExpressionQuery, {projection: {_id : 0}}).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
    })
});