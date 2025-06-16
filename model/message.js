import pool from "../db/dbConfig.js";

class Message{
    constructor(id,user_id,name,email,message){
        this.id=id;
        this.user_id=user_id;
        this.name=name;
        this.email=email;
        this.message=message;
    }

 
  create(){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
          if(!err){    
            let sql = "insert into messages(user_id,name,email,message)values(?,?,?,?)";
           con.query(sql,[this.user_id,this.name,this.email,this.message],(err,result)=>{
            err?reject(err):resolve(result);
           })
     }else{
        reject(err);
     } })
    })

};

}
export default Message;