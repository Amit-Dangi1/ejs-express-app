import pool from "../db/dbConfig.js";

class User{
    constructor(id,name,email,contact,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.contact=contact;
        this.password=password;
    }
      create(){
        return new Promise((resolve,rej)=>{

       
        pool.getConnection((err,con)=>{
            if(!err){
            let sql = "insert into user(name,email,contact,password)values(?,?,?,?)";
            con.query(sql,[this.name,this.email,this.contact,this.password],(err,result)=>{
            con.release();

                err?rej(err):resolve(result);
                
                
            });

      }else{
        rej(err);
      }  })
       })
    };

    static find(email,password){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                let sql = "select * from user where email=? and password=?";
                if(!err){
                 
                    con.query(sql,[email,password],(err,result)=>{
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
export default User;