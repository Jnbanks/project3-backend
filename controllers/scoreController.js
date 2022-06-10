const express = require("express");
const router = express.Router();
const {User,Score} = require("../models");
const {withAuth} = require("../utils/tokenAuth")

//find all
router.get("/", (req, res) => {
  Score.findAll({})
    .then(dbScores => {
      res.json(dbScores);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});
//find one
router.get("/:id", (req, res) => {
  Score.findByPk(req.params.id,{})
    .then(dbScore => {
      res.json(dbScore);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create Score
router.post("/",  (req,res) => {
  console.log(req.user)
  Score.create({
    level1Score:req.body.level1Score,
    userId:req.user
  })
    .then((newScore) => {
      res.json(newScore);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//delete a Score
router.delete("/:id", (req, res) => {
  Score.destroy({
    where: {
      id: req.params.id
    }
  }).then(delScore => {
    res.json(delScore);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});



module.exports = router;
