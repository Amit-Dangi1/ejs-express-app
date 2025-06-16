
let auth = (req,res,next)=>{
    if(req.session.isLoggedIn){
        next();
    }else{
        res.redirect("/sign-in");
    }
}
export default auth;