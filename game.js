var express = require("express");
var bodyParser = require("body-parser");
var lessMiddleware = require('less-middleware');
var mongoose = require('mongoose');
var port = 3003;
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
require("./build/drone");
var drones = require("./build/drones.js");
require("./build/quadrant");
var quadrants = require("./build/quadrants.js");


mongoose.connect("mongodb://kenth56:123@ds034807.mlab.com:34807/database_baby", {
  useMongoClient: true
}).then(() => {
  console.log("db connected");
}, ((err) => {
    console.log(err);
}))

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(lessMiddleware(path));
app.use(express.static(path));
app.use("/",router);

router.get("/", (req,res) => {
  res.sendFile(path + "index.html");
})

app.use("/drones", drones);
app.use("/quadrants", quadrants)

app.listen(port, () => {
  console.log("Live at Port " + port);
})

router.use( (req,res,next) => {
  console.log("/" + req.method);
  next();
})

app.use("*", (req,res) => {
  res.sendFile(path + "404.html");
})
