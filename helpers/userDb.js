var userModel      =  require('../models/userModel');

module.exports = {
  register:(data)=>{
       return new Promise((resolve,reject)=>{
            try {
               let users  = new userModel({
                   name  : data.name,
                   email : data.email,
                password : data.password
               });
               users.save((err,dataa)=>{
                   if(err){
                       reject(err);
                   }
                   else{
                       resolve(dataa);
                   }
               });
            } catch (error) {
                reject(error);
            }
       });
  },

  checkEmail:(email)=>{
      return new Promise((resolve,reject)=>{
         try {
           userModel.find({'email':email},(err,dataa)=>{
                 if(err){
                     reject(err);
                 }
                 else if(dataa.length){
                     resolve(dataa);
                 }
                 else{
                     reject({message:'user not registered'});
                 }
           });   
         } catch (error) {
             reject(error);
         }
      });
  },
 matchPassword:(password)=>{
      return new Promise((resolve,reject)=>{
             try {
                 userModel.find({'password':password},(err,dataa)=>{
                       if(err){
                           reject(err);
                       }
                       else if(dataa.length){
                           localStorage.setItem("profileData",dataa);
                           resolve(dataa);
                       }
                       else{
                           reject({message:'password didnt match'});
                       }
                 });
             } catch (error) {
                 reject(error);
             }
      });
 },
 profile:()=>{
      return new Promise((resolve,reject)=>{
          try {
              var profile = localStorage.getItem("profileData");
               resolve(profile);    
          } catch (error) {
              reject(error);
          }
      });
  }
}