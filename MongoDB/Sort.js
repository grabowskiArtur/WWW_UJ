const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


MongoClient.connect(url,function (err, db) {
   if (err) throw err;
   const dbo = db.db("BigDB2");
   const mySort = {name: 1 };

   dbo.collection("Sasiedzi").find().sort(mySort).toArray(function (err, result) {
       if (err) throw err;
       console.log(result);
       db.close();
   })
});