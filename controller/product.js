import { render } from "ejs";
import Book from "../model/book.js";
// import express, { request } from "express";
import Order from "../model/order.js";


export const save_in_bulk =async (req,res)=>{
   try{
    let list = req.body;
console.log(list);

    for(let product of list){
         await Book.save_in_bulk(product);
    }
    return res.send("All done");
}catch(err){
        console.log(err);
       return res.send("Data not set......") 
    }
    
    
}

export const getBy_Id = (req,res,next)=>{
    const id = req.params.product_id;
        // req.session.product_id = req.params.product_id;

    
    Book.findBy_Id(id)
    .then(result=>{
        console.log(req.params.product_id)
        req.session.product = result[0];
        console.log("result[0] = ",result[0]);
        return res.render("view_more.ejs",{isLoggedIn:req.session.isLoggedIn,currentuser:req.session.currentuser,product:result[0]})
    }).catch(err=>{
        console.log("Find By Id = ",err);
        
    });
}
export const buy =(req,res,next)=>{
    console.log("-------------- ",req.session.product);
    
    return res.render("buy_now.ejs",{isLoggedIn:req.session.isLoggedIn,currentuser:req.session.currentuser,product:req.session.product});
} 

export const order_info = (request,response,next)=>{
    let user_id = request.session.currentuser.id;
    let book_id = request.session.product.id;
    let total = request.session.product.price;

console.log("user id = ",user_id);
console.log("book id = ",book_id);
console.log("total = ",total);
console.log("body = ",request.body);

    const Order_details = new  Order(user_id,book_id,total);
    Order_details.order().then(result=>{
       console.log(result);
       console.log("Order Done ...");
        response.render("confirmed.ejs");
       
    }).catch(err=>{
        console.log("Order Page Error = ",err);
        response.send("Not Confirmed");
        
    })
}




