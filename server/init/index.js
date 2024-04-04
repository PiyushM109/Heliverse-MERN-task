const mongoose = require("mongoose");
const initData = require("./data.js");
const User = require("../model/userSchema.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Heliverse");
}

const initDB = async () => {
  await User.deleteMany({});
  await User.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
