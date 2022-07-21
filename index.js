const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
let client = new MongoClient("mongodb+srv://doadmin:GQaT0m2Aq58t7461@db-mongodb-nyc3-06454-beeda2d1.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-nyc3-06454", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect().then((client) => {
  db = client.db("movie");

  db.collection("comedy").insertOne({ name:"woeked!"}).then(()=>{
    process.exit();
  });

});
    res.sendFile(__dirname + "/index.html");
  });

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

// let client = new MongoClient("mongodb+srv://doadmin:GQaT0m2Aq58t7461@db-mongodb-nyc3-06454-beeda2d1.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-nyc3-06454", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// client.connect().then((client) => {
//   db = client.db("movie");

//   db.collection("movie").insertOne({ message:"Hello from DigitalOcean!"}).then(()=>{
//     process.exit();
//   });

// });


