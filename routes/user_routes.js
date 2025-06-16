import express  from  "express";
import { signin_controller, signout_controller, signup_controler } from "../controller/user_controller.js";
import { contact } from "../controller/message_controller.js";
import auth from "../middleware/auth.js";


const router  = express.Router();

router.post("/signup",signup_controler);
router.post("/signin",signin_controller);
router.get("/signout",signout_controller);
router.post("/contact",auth,contact);


export default router;