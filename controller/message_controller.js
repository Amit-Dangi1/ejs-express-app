import express from "express";
import Message from "../model/message.js";


export const contact = (request,response,next)=>{
     let{name,email,feedback} = request.body;
     let user_id = request.session.currentuser.id;
     console.log("id = ",user_id," : name = ",name," : = ",email," : = ",feedback);
     let send = false;
     let messageobj = new Message(null,user_id,name,email,feedback);
     messageobj.create().then(result=>{
        console.log(result);
        send=true;
        return response.render("contact_feedback.ejs",{me:send});
     }).catch(err=>{
        console.log("Message not Send = ",err);
        
        return response.render("contact_feedback.ejs",{me:send});
     })

}