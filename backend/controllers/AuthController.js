const userModel = require('../models/userModel');
const bcryptjs = require ('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req,res) => {
  const {name, email, password} = req.body;
  const existsuser = await userModel.findOne({
    email
  })
  if(existsuser){
    return res.status(404).json({"status": false, message : "email already exists"});
  }
  const hasspassword = await bcryptjs.hash(password,16)

  const user = new userModel({
    name,email,password:hasspassword
  });

  user.save();

res.status(200).json({"status": true, message : "user register"});
}


const login = async (req,res) => {
  const {email, password} = req.body;

  const exist = await userModel.findOne({email})

  if(!exist){
    return res.status(404).json({"status": false, message : "user not found"});
  }

  const hasspassword = await bcryptjs.compare(password,exist.password)

    if(!hasspassword){
    return res.status(404).json({"status": false, message : "user not found"});
  }

  const token = jwt.sign(exist.toObject(),"secretkey")


res.status(200).json({"status": true, message : "user login success", token});
}



const forgot = async (req,res) => {
  const {email} = req.body;

  const exist = await userModel.findOne({email})

  if(!exist){
    return res.status(404).json({"status": false, message : "user not found"});
  }

  const token = jwt.sign(exist.toObject(),"secretkey")


res.status(200).json({"status": true, message : "Pls check your email reset password link sent!"});
}


module.exports = {
    register,
    login,
    forgot
}