const mongoose = require("mongoose");
const initData = require("./data.js");
const User = require("../model/userSchema.js");
const dotenv = require('dotenv').config()

console.log(process.env.MONGO_LINK)

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb+srv://piyushmore109:Up21eqrOw69zhqqj@cluster0.41wzmly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

const initDB = async () => {
  await User.deleteMany({});
  await User.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
