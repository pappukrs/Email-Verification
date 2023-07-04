const express = require('express');
const jwt = require('jsonwebtoken');
port=3000;
const app=express();


app.get('/', (req, res) => {
    res.send(`<h1>Homepage</h1>`);
})

app.get('/mailer/:token',(req, res) => {
    const {token}=req.params;
    
    //verify your token
    jwt.verify(token,"solutions",(err, data) => {

        if(!err){
            console.log("Email verification Successful");
        }
        else{
            console.log(`Email verification failed ,Either link is expired 
            or link is broken`)
        }
    })

})

app.listen(port,(err)=>{
   if(err){
    console.log("Server failed to run")
   }
   else{
    console.log("Server is running on port :"+port)
   }
})