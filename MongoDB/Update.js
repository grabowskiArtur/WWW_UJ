const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


MongoClient.connect(url,function (err, db) {
    if (err) throw err;
    const dbo = db.db("BigDB2");
    const myQuery = {address: "Przykopy 14a"};
    const newValues = {$set: {name: "Krystian i Justyna", address: "Przykopy 14a"}};

/*    dbo.collection("Sasiedzi").updateOne(myQuery,newValues,function (err, res) {
        if (err) throw err;
        console.log("1 doc updated");
        db.close();
    });*/

    //Only specific fields
    const newValues2 = {$set: {address: "Jugowicka21"}};
    dbo.collection("Sasiedzi").updateOne(myQuery,newValues2,function (err, res) {
        if (err) throw err;
        console.log("Only address updated ");
        db.close();
    });

    //update many
    const nameArtur = {name: /^A/};
    const arturoNewAddress = {$set: {address: "Wislane tarasy"}};
    dbo.collection("Sasiedzi").updateMany(nameArtur, arturoNewAddress, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " Arturo's address were updated!");
        db.close();
    });


    dbo.collection("Sasiedzi").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log("Whole base");
        console.log(result);
        console.log();
        db.close();
    });

});