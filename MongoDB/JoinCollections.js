const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    const dbo = db.db("myDb220");

    const myObj = {n_id: 1, product_id: 154, status: 1 };
    dbo.collection("orders").insertOne(myObj, function (err, res) {
        if (err) throw err;
       // console.log(res);
    });

    const myBigObject = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemons' },
        { _id: 156, name: 'Vanilla Dreams' }
    ];

    dbo.collection("products").insertMany(myBigObject, function (err, res) {
        if (err) throw err;
        console.log("MultipleDatabase inserted");
        console.log("Number of documents : " + res.insertedCount);
       // console.log(res);
    });

    dbo.collection('orders').aggregate([
        {
            $lookup:
                {
                    from: 'products',
                    localField: 'product_id',
                    foreignField: '_id',
                    as: 'orderrdetails'
                }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    })
});