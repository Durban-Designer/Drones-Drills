//purpose: To provide routing for the /quadrants endpoint
var express = require("express");
var mongodb = require("mongodb");
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Quadrant = mongoose.model("Quadrant");

router.post("/", (req,res) => {
  var newQuadrant = new Quadrant({
    name: req.body.name,
    location: req.body.location,
    size: req.body.size,
    contents: req.body.contents,
    empire: req.body.empire
  })

  newQuadrant.save((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

router.get("/", (req, res) => {
  Quadrant.find(function (err, quadrants) {
    if (err) {
      res.send(err);
    } else {
      res.send(quadrants);
      console.log(quadrants);
    }
  })
})

router.get("/:name", (req, res) => {
  var quadrantName = req.params["name"];
  Quadrant.find({"name": quadrantName},function (err, quadrants) {
    if (err) {
      res.send(err);
    } else {
      res.send(quadrants);
      console.log(quadrants);
    }
  })
})


router.put("/", (req, res) => {
  var quadrantid = req.body._id;
  Quadrant.find({"_id": quadrantid},function (err, quadrant) {
    if (err) {
        res.status(500).send(err);
    } else {
        var quadrant = quadrant[0];
        quadrant.name = req.body.name || quadrant.name;
        quadrant.location = req.body.location || quadrant.location;
        quadrant.size = req.body.size || quadrant.size;
        quadrant.contents = req.body.contents || quadrant.contents;
        quadrant.empire = req.body.empire || quadrant.empire;

        quadrant.save(function (err, quadrant) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(quadrant);
        });
    }
});
})

router.delete("/", (req, res) => {
  var quadrantid = req.body._id;
  Quadrant.find({_id: quadrantid}).remove().then(() => {
    res.send("success");
  })
})

module.exports = router;
