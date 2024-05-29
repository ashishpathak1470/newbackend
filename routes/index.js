var express = require('express');
var router = express.Router();
const userModel = require("./users");


router.get('/', function(req, res) {
  res.send("Welcome");
});

router.get("/create", async function(req, res) {
  const usercreated = await userModel.create({
    username: "ash",
    age: 21,
    name:"ashish"
  });
  res.send(usercreated);
}) // craete the user (CREATING)

router.get("/find", async function(req, res) {
  const userfound = await userModel.find();
  res.send(userfound);
}) // find the user and show them on the frontend (READING)

router.get("/Onefind", async function(req, res) {
  const userfound = await userModel.findOne({username:"ash"});
  res.send(userfound);
}) // find one specific user


router.get("/delete", async function(req, res) {
  const userdeleted = await userModel.findOneAndDelete({username:"ash"});
  res.send(userdeleted);
}) // Delete one perticular user (DELETING)










module.exports = router;
