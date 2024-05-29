var express = require('express');
var router = express.Router();
const userModel = require("./users");

// // COOKIE SIKHA HAI
// router.get('/', function(req, res) {
//   res.cookie("age",21); // Cookie bna hai 
//   res.send("Welcome to my Server");
// }) // (CREATING)

// router.get('/read', function(req, res) {
//   console.log(req.cookies.age); // read kiya hai
//   res.send("read hua");
// }) // (READING)

// router.get('/delete', function(req, res) {
//   res.clearCookie("age"); // delete kiya hai
//   res.send("delete hua");
// })



// SESSION SIKHA HAI
// router.get('/', function(req, res) {
//   req.session.kuchbhinaam = "ashish"; // session bna hai (CREATE)
//   req.session.ban = true; //(BAN KIYA)
//   res.send("Welcome to my Server");
// });

// router.get("/check",function(req  , res) {
//   if(req.session.ban === true) //check kiya session ko (READ)
//   {
//     console.log(req.session);
//     res.send("you are banned");
//   }
//   else{
//     res.send("you are not banned");
//   }
// }) // (BAN CHECK KIYA)

// router.get("/removeban", function(req, res) {
//   req.session.destroy(function(err) // (DELETE)
//    {
//     if(err) throw err;
//     res.send("you are unbanned");
//   })
// }) // remove kiya session ko (BAN HATAYA)


// DATABASE SIKHA HAI
// router.get("/create", async function(req, res) {
//   const usercreated = await userModel.create({
//     username: "ash",
//     age: 21,
//     name:"ashish"
//   });
//   res.send(usercreated);
// }) // craete the user (CREATING)

// router.get("/find", async function(req, res) {
//   const userfound = await userModel.find();
//   res.send(userfound);
// }) // find the user and show them on the frontend (READING)

// router.get("/Onefind", async function(req, res) {
//   const userfound = await userModel.findOne({username:"ash"});
//   res.send(userfound);
// }) // find one specific user


// router.get("/delete", async function(req, res) {
//   const userdeleted = await userModel.findOneAndDelete({username:"ash"});
//   res.send(userdeleted);
// }) // Delete one perticular user (DELETING)










module.exports = router;
