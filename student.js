const express = require("express");
const mongoose = require("mongoose");

let app = express();

async function connect() {
  let connection = await mongoose.connect("mongodb://0.0.0.0:27017/Students");
  if (!connection) {
    console.log("noo");
  } else {
    console.log("good");
  }
}
connect();
const StudentsSchema = new mongoose.Schema({
  Studentname: String,
  age: Number,
  phone: String,
  Email: String,
  address: String,
  id: Number,
});

let Studentsmodel = new mongoose.model("Students", StudentsSchema);

const coursesSchema = new mongoose.Schema({
  coursesname: String,
  price: Number,
  numberofparticipants: String,
});

let coursesmodel = new mongoose.model("courses", coursesSchema);

let newuser = new Studentsmodel({
  Studentname: "Hala Ayman",
  age: "22",
  phone: "01552475441",
  Email: "Hala Ayman@gmai.com",
  address: "ismailia",
  id: "7896",
}).save();

let AhmedUser = new Studentsmodel({
  Studentname: "Mariam Hesham",
  age: "19",
  phone: "01154782155",
  Email: "Mariam Hesham@gmail.com",
  address: "cairo",
  id: "5478",
}).save();

let MohamedElsayed = new Studentsmodel({
  Studentname: "Rahma Said",
  age: "21",
  phone: "01259454547",
  Email: "Rahma Said@gmail.com",
  address: "cairo",
  id: "1235",
}).save();

let Newunser = new coursesmodel({
  coursesname: "IT",
  price: "400 ",
  numberofparticipants: "17",
}).save();

let it = new coursesmodel({
  coursesname: "IS",
  price: "300 ",
  numberofparticipants: "15",
}).save();

let Newuser = new coursesmodel({
  coursesname: "cs",
  price: "250 ",
  numberofparticipants: "16",
}).save();

app.get("/Students", async (req, res) => {
  let allStudents = await Studentsmodel.find();
  res.status(200);
  console.log(allStudents.length);
  res.json(allStudents);
});

app.get("/Courses", async (req, res) => {
  let allCourses = await coursesmodel.find();
  res.status(200);
  console.log(allCourses.length);
  res.json(allCourses);
});

app.listen(3000, function () {
  console.log("server now is opend");
});