import express from "express";
import User from "../model/User.js";

export const signup_controler = (req,response,next)=>{
let{name,email,contact,password} = req.body;

let user = new User(null,name,email,contact,password);
user.create().then(result=>{
    console.log("result Sign Up = ",result);
return response.redirect("/sign-in");
    
    
}).catch(err=>{
    console.log("Somethig went wrong in User_Controller = ",err.sqlMessage);
response.send("Something went wrong: " + err.sqlMessage);

});


}

export const signin_controller = (req,res,next)=>{
    let{email,password} = req.body;
    // console.log(req.body);
    
    User.find(email,password).then(result=>{
        if(result.length){
         req.session.isLoggedIn = true;   
         req.session.currentuser = result[0];   
        console.log("Sign Done........ = ",result);
        return res.redirect("/");
    }else{
        console.log("Enter Correct Information (Controller)");
        
        return res.redirect("/sign-in"); 
    }
    }).catch(err=>{
        console.log("Not SignIn = ",err);
        return res.send("Not SignIn......")
        
    });
}

export const signout_controller = (req,res,next)=>{
    req.session.isLoggedIn=false;
    req.session.currentuser=null;
    req.session.destroy();
    return res.redirect("/");
}