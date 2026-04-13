const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcryptjs = require ('bcryptjs');
const userModel = require('./models/userModel');
const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO_URL);

const db= mongoose.connection;

db.on("open", ()=> {
    console.log("db connected");
})
const HOST = process.env.HOST;
const PORT = process.env.PORT;


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());


app.get("/", (req,res) => {
res.json({"status": true, message : "server working"});
});


app.post("/register",async (req,res) => {
  const {name, email, password} = req.body;
  const existsuser = await userModel.findOne({
    email
  })
  if(existsuser){
    return res.json({"status": false, message : "email already exists"});
  }
  const hasspassword = await bcryptjs.hash(password,16)

  const user = new userModel({
    name,email,password:hasspassword
  });

  user.save();

res.json({"status": true, message : "user register"});
});



app.listen(PORT,HOST, () => {
    console.log(`server running at http://${HOST}:${PORT}`);
})
