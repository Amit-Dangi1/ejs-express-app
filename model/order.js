import pool from "../db/dbConfig.js";

class Order{
    constructor(order_id,user_id,product_id,total_amount){
        this.order_id=order_id;
        this.user_id=user_id;
        this.product_id=product_id;
        this.total_amount=total_amount;

    }
   order(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
              
                let sql = "insert into orders(user_id,book_id,total_amount)values(?,?,?)";
                con.query(sql,[this.order_id,this.user_id,this.product_id,this.total_amount],(err,result)=>{
                    con.release();
                    err?reject(err):resolve(result);
                })

            }else{
                reject(err);
            }
        })
    })
   }

}

export default Order;