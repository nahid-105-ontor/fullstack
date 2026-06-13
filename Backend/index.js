require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Hello I am Working Fine");
});
app.get("/twitter",(req,res)=>{
    res.send("Hello I am twitter Route");
});
app.get("/instagram",(req,res)=>{
    res.send("Hello I am Instagram Route");
});
app.get("/facebook",(req,res)=>{
    res.send("This is your Facebook Page");
});
app.listen(port,()=>{
    console.log(`Server is Running At Port ${port}`);
});
