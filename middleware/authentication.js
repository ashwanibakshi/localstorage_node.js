module.exports.auth = (req,res,next)=>{
 if(localStorage.getItem("profileData")!=null){
     console.log('dsds');
     next();
 }
 else{
     res.json({message:'user is not authenticated'});
 }
}