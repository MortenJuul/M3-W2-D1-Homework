var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]

let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mongodb";

MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
    }, function (err, db) {
        // if (err) throw err;
        // console.log("Database created!");
        // db.close();
 
    let dbo = db.db("statsdb");
    // dbo.createCollection("uscensus", function(err, res){
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     console.log(res);
    //     db.close();
    // });

    // dbo.collection("uscencus").insertMany(stats, function(err, res) {
    //     if(err) throw err;
    //     console.log(`Number of documents inserted: ${res.insertedCount}`);
    //     db.close();
    // });

    // let newstats =[
    //     {
    //         'city': 'Pacoima', 
    //         'zip': '91331', 
    //         'state': 'CA', 
    //         'income': '60360',
    //         'age': '33'
    //     },
    //     {
    //         'city': 'Ketchikan', 
    //         'zip': '99950', 
    //         'state': 'AK', 
    //         'income': '00000',
    //         'age': '00'
    //     }
    // ];

    // dbo.collection("uscencus").insertMany(newstats, function(err, res) {
    //     if(err) throw err;
    //     console.log(`Number of documents inserted: ${res.insertedCount}`);
    //     db.close();
    // });

    // let query = {city: "Corona"};
    // dbo.collection("uscencus").find(query).toArray(function(err, res) {
    //     if(err) throw err;
    //     console.log(res);
    //     console.log(`The zip code of ${res[0].city} is ${res[0].zip}`);
    //     db.close();
    // });

    // let query = {state: "CA"};
    // dbo.collection("uscencus").find(query).toArray(function(err, res) {
    //     if(err) throw err;
    //     console.log(res);
    //     console.log(`The total income all cities in the state of ${res[0].state} is ${res.map(city => parseInt(city.income)).reduce((sum, num) => sum + num)}`);
    //     db.close();
    // });

    // let myquery = {state: "AK"};
    // let newvalues = { $set: {income: "38910", age: "46"} };
    // dbo.collection("uscencus").updateOne(myquery, newvalues, function(err, res) {
    //     if(err) throw err;
    //     console.log("1 document updated");
    //     db.close();
    // });

    let mySort = {state: 1};
    dbo.collection("uscencus").find().sort(mySort).toArray(function(err, res) {
        if(err) throw err;
        console.log(`The DB has been sorted:`)
        console.log(res);
        db.close();
    });
});