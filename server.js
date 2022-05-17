const express = require("express");
const app = express();
const ejs = require ("ejs")
const {addDate}=require('./middleware/middleware')

const port = process.env.port || (4004)

const userRouter = require("./routes/route");
app.use("/",userRouter);
app.set("view engine","ejs");







app.get("/",addDate,(req,res,next)=>{
    res.render("HomePage");
});

app.get("/services",addDate,(req,res,next)=>{
    res.render("OurServices");
});

app.get("/contact",addDate,(req,res,next)=>{
    res.render("contactUs");
});


app.listen(4004,err=>{
    err?console.log(err):console.log("go to 4004")
});