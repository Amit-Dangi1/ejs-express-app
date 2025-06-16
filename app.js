import bodyParser from "body-parser";
import express from "express";
import session from "express-session";
import dotenv from "dotenv"
import Home from "./routes/home_routes.js";
import User from "./routes/user_routes.js";
import Product from "./routes/product_routes.js";
dotenv.config();

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret: 'fsfjkljsfrjweirweovmvnmbvxmbvmxcvrweoruweo'
}));

app.use("/",Home);
app.use("/user",User)
app.use("/product",Product);



app.listen(3000,()=>{
    console.log("Server Started.....");
    
})

