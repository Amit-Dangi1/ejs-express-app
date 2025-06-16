import express from "express";
import Book from "../model/book.js";
 
export const home = (req,res,next)=>{
    // return res.render("Home.ejs",{isLoggedIn:req.session.isLoggedIn,currentuser:req.session.currentuser});
    Book.findAll().then(data=>{
        
        


        // console.log(data);
    return res.render("Home.ejs",{isLoggedIn:req.session.isLoggedIn,currentuser:req.session.currentuser,alldata:data});

    }).catch(err=>{
        console.log("Book Find Error = ",err);
       return res.send("Not Found"); 
    });
}

export const singup = (req,res,next)=>{   
    return res.render("signup.ejs");
}     

export const signin = (req,res,next)=>{
    return res.render("signin.ejs");
}
export const about  = (req,res,next)=>{
    return res.render("about.ejs",{isLoggedIn:req.session.isLoggedIn,currentuser:req.session.currentuser});
}

export const contact = (req,res,next)=>{
    return res.render("contact.ejs",{isLoggedIn:req.session.isLoggedIn,currentuser:req.session.currentuser});
}
// export const findAllProduct = (req,res,next)=>{
//     Book.findAll().then(result=>{
//         console.log(result);
//         return res.send("All Fined");
//     }).catch(err=>{
//         console.log("Book Find Error = ",err);
//        return res.send("Not Found"); 
//     });
// }

