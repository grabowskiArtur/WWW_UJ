const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
   if (err) throw err;
   const dbo = db.db("BigDB2");
   const myObj = {name : "Artur"};

    //find one                 // use {} instead of myObj to find 1 occurance without any queries
   dbo.collection("Sasiedzi").findOne(myObj,function (err, res) {
       if (err) throw err;
       console.log(res.address);
       console.log();
       db.close();
   });

    //dbo.collection("Sasiedzi").remove();
    //find all,
    dbo.collection("Sasiedzi").find(myObj).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log();
        db.close();
    });
    dbo.collection("Sasiedzi").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log("Whole base");
        console.log(result);
        console.log();
        db.close();
    });

//You are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the _id field). If you specify a field with the value 0, all other fields get the value 1, and vice versa:
    dbo.collection("Sasiedzi").find({},{ projection : {_id: 0, name: 1} // put here only this one which you want to display 0/false does not work for any other option than _id
    }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        console.log();
        //or you can you sth like this to single variables :

        db.close();
    })
    dbo.collection("Sasiedzi").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log("Single element");
        console.log(result[2].address);
        console.log();
        db.close();
    });


});


