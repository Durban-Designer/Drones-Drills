var express = require("express");
var mongodb = require("mongodb");
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Drone = mongoose.model("Drone");

router.post("/", (req,res) => {
  var newDrone = new Drone({
    name: req.body.name,
    weight: req.body.weight,
    drill: req.body.drill,
    inventory_size: req.body.inventory_size,
    inventory: req.body.inventory,
    owner: req.body.owner
  })

  newDrone.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

router.get("/", (req, res) => {
  Drone.find(function (err, drones) {
    if (err) {
      res.send(err);
    } else {
      res.send(drones);
    }
  })
})


router.put("/", (req, res) => {
  var droneid = req.body._id;
  Drone.find({"_id": droneid},function (err, drone) {
    if (err) {
        res.status(500).send(err);
    } else {
        var drone = drone[0];
        drone.name = req.body.name || drone.name;
        drone.weight = req.body.weight || drone.weight;
        drone.drill = req.body.drill || drone.drill;
        drone.inventory_size = req.body.inventory_size || drone.inventory_size;
        drone.inventory = req.body.inventory || drone.inventory;
        drone.owner = req.body.owner || drone.owner;

        drone.save(function (err, drone) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(drone);
        });
    }
});
})

router.delete("/", (req, res) => {
  var droneid = req.body._id;
  Drone.find({_id: droneid}).remove().then(() => {
    res.send("success");
  })
})

module.exports = router;
