
const nodemailer = require('nodemailer');
const jwt=require("jsonwebtoken");
//transporter

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        // with your email and  app password
        user:"example@gmail.com",
        pass:"xazxmkzjzrzkoydy"
    }
});

const token=jwt.sign({data:replace"matriot"},"solutions",{expiresIn:"10m"});


const info={
    from:"example@gmail.com",
    to:"other@gmail.com",
    subject:"Email verification",
    text:`Hey! you just signup for our website codeserver 
    please follow this link http://localhost:3000/mailer/${token}
    to verify your email`
}

transporter.sendMail(info,(err,res)=>{
  if(!err){
    console.log("Email sent successfully")
  }
  else{
    console.log("Failed to send email",err);
  }
});