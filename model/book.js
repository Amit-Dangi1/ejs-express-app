import pool from "../db/dbConfig.js";


class  Book{
   constructor(id, title, author, category, price, rating, returnPolicy, shipping, stockStatus, thumbnail, description) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.category = category;
    this.price = price;
    this.rating = rating;
    this.returnPolicy = returnPolicy;
    this.shipping = shipping;
    this.stockStatus = stockStatus;
    this.thumbnail = thumbnail;
    this.description = description;
  }

 static save_in_bulk(product){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
                let sql = "INSERT INTO books (title, author, category, price, rating, returnPolicy, shipping, stockStatus, thumbnail, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
            con.query(sql,[product.title,product.author,product.category,product.price,product.rating,product.returnPolicy,product.shipping,product.stockStatus,product.thumbnail,product.description],(err,result)=>{
              con.release();
                err?reject(err):resolve(result);
            })}else{
                reject(err);
            }
        });
    });
  }


static findAll(){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
          if(!err){
            
            let sql = "select * from books";
            con.query(sql,(err,result)=>{
              con.release();
              err?reject(err):resolve(result);
            });

          }else{
            reject(err);
          }
        })
      })
}

static findBy_Id(product_id){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
          if(!err){
            
            let sql = "select * from books where id=?";
            con.query(sql,[product_id*1],(err,result)=>{
              con.release();
              err?reject(err):resolve(result);
            });

          }else{
            reject(err);
          }
        })
      })
}
}
export default Book;