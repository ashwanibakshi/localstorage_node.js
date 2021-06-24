var userDb     = require('../../helpers/userDb');


module.exports.userControl = {

    register:(req,res)=>{
         userDb.register(req.body)
         .then((data)=>{
             res.json({data:data,msg:'success'});
         })
         .catch((err)=>{
             res.json({error:err.message});
         })
    },
    login:(req,res)=>{
          userDb.checkEmail(req.body.email)
          .then((data)=>{
             return userDb.matchPassword(data[0].password)
          })
          .then((dataa)=>{
              res.json({data:dataa});
          })
          .catch((err)=>{
               res.json({error:err.message});
          })
    },
    profile:(req,res)=>{
        userDb.profile()
        .then((data)=>{
            res.json({data:data,msg:'success'});
        })
        .catch((err)=>{
            res.json({error:err.message});
        })
    },
    logout:(req,res)=>{
        localStorage.removeItem("profileData");
        res.json({msg:'user is logged out'});
    }
}