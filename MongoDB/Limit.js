const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const bigDB = db.db("MegaRandomDB");
    const myBigObject = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
    ];

    if (bigDB.collection("customers").exists)
    {
        console.log("Istnieje juz takie cos");
    }
    bigDB.collection("customers").remove();
    bigDB.collection("customers").insertMany(myBigObject, function (err, res) {
        if (err) throw err;
        console.log("MultipleDatabase inserted");
        console.log("Number of documents : " + res.insertedCount);
        console.log(res);
    });
    bigDB.collection("customers").find().limit(5).toArray(function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    db.close();
});