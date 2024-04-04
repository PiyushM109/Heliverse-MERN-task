const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/userSchema.js");
const cors = require("cors");
const Team = require("./model/teamSchema.js")
const app = express();
const dotenv = require('dotenv').config()



const port = 3000;

main()
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_LINK);
}

// const User = mongoose.model('User', userSchema);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server running");
});

app.get("/api/users/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 20;
  const skip = (page - 1) * pageSize;

  try {
    const users = await User.find().skip(skip).limit(pageSize);

    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / pageSize);

    res.status(200).json({
      users,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/users/:id",(req,res)=>{
    const {id} = req.params;
    User.find({"id":id}).then((resp)=>{
        res.send(resp);
    }).catch((err)=>{
        console.log(err);
    })
});

app.put("/api/users/:id",(req,res)=>{    //here id is document created _id
    const {id} = req.params;
    const data = req.body;
    User.findByIdAndUpdate(id,data)
})

app.post("/api/users", async (req, res) => {
  const data = req.body;
  const user = new User(data);
  console.log(user);
  await user.save();
  res.status(200).send("Data Saved Successfully!");
});

app.post("/api/team", async (req,res)=>{
  try {
    const { name, members } = req.body;
    members.map((member)=>(
      User.findByIdAndUpdate(member._id,{...member,available : false}).then((resp)=>{
        // console.log(resp);
      })
    ))
    const newTeam = new Team({ name, members });
    // console.log(newTeam);
    await newTeam.save();
    res.status(201).json(newTeam);
} catch (error) {
    console.error('Error saving team:', error);
    res.status(500).json({ message: 'Error saving team' });
}
});

app.get("/api/teams",async (req,res)=>{
  const teams = await Team.find().populate('members');
  res.status(200).send(teams);
})

app.listen(port, () => {
  console.log("App is running on port no: ", port);
});
