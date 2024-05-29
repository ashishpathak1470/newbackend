// install mongodb
// install moongoosejs
// reqire and setup connection
// make schema (code side)  => document banega (db side)
// create model and export (code side) => collection banega (db side)


const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/practice"); // db connection

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
}) //schema bana hai

module.exports= mongoose.model("users",userschema) // model bana hai jooki collection bana dega