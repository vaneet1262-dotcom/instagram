const userModel = require('../models/userModel');
const bcryptjs = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const SendMail = require('../services/nodemailer');

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
   try {

    const exist = await userModel.findOne({email})

  if(!exist){
    throw new Error("User Not found")
  }

  const token = jwt.sign(exist.toObject(),"secretkey");
 const reset_link = `http://localhost:5173/auth/reset/${token}`;

const message = `
<p style="font-family: Arial, sans-serif; font-size:16px; color:#333;">
  Hello,
</p>

<p style="font-family: Arial, sans-serif; font-size:16px; color:#333;">
  We received a request to reset your password. Click the button below to create a new password:
</p>

<p style="text-align:center; margin:30px 0;">
  <a href="${reset_link}" 
     style="background:#007bff; color:#fff; padding:12px 24px; text-decoration:none; border-radius:6px; font-size:16px; display:inline-block;">
     Reset Password
  </a>
</p>

<p style="font-family: Arial, sans-serif; font-size:14px; color:#666;">
  If you did not request a password reset, you can safely ignore this email.
</p>

<p style="font-family: Arial, sans-serif; font-size:14px; color:#666;">
  This link will expire in 30 minutes for security reasons.
</p>

<p style="font-family: Arial, sans-serif; font-size:16px; color:#333;">
  Regards,<br>
  Your Support Team
</p>
`;

await SendMail(exist.email,"Forgot Password Link", message)


res.status(200).json({"status": true, message : "Pls check your email reset password link sent!"});
    
   } catch (error) {
    return res.status(404).json({"status": false, message : "user not found"});
   }
  
}


const reset = async (req,res) => {
  const {token,password} = req.body;



   try {
     const user =  jwt.verify(token,"secretkey")

   if(!user){
    throw new Error("Not found")
  }
  const hasspassword = await bcryptjs.hash(password,16)
    const exist = await userModel.findOneAndUpdate({email:user.email},{
      password:hasspassword
    })


const message = `
<p style="font-family: Arial, sans-serif; font-size:16px; color:#333;">
  Hello,
</p>

<p style="font-family: Arial, sans-serif; font-size:16px; color:#333;">
  Your password has been successfully reset.
</p>

<p style="font-family: Arial, sans-serif; font-size:16px; color:#333;">
  You can now log in using your new password.
</p>

<p style="text-align:center; margin:30px 0;">
  <a href="http://localhost:5173/login" 
     style="background:#28a745; color:#fff; padding:12px 24px; text-decoration:none; border-radius:6px; font-size:16px; display:inline-block;">
     Login Now
  </a>
</p>

<p style="font-family: Arial, sans-serif; font-size:14px; color:#666;">
  If you did not make this change, please contact support immediately.
</p>

<p style="font-family: Arial, sans-serif; font-size:16px; color:#333;">
  Regards,<br>
  Your Support Team
</p>
`;

await SendMail(exist.email,"Reset Password Success", message)


res.status(200).json({"status": true, message : "Reset Password Success!"});
    
   } catch (error) {
    return res.status(404).json({"status": false, message : error.message});
   }
  
}


module.exports = {
    register,
    login,
    forgot,
    reset
}