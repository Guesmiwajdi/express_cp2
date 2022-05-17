const addDate=(req,res,next)=>{
const date=new Date();
req.date = date;
const heure=date.getHours();
const day=date.getDay();
if (heure >17 || heure < 9 || day >5){
    res.send("the web site is closed !");
}
else{
    next();
}
};
module.exports={addDate}