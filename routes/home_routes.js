import express from "express"
import {  about, contact, home, signin, singup } from "../controller/home_controller.js";

const router = express.Router();

router.get("/",home);
router.get("/about",about);
router.get("/sign-up",singup);
router.get("/sign-in",signin);
router.get("/contact",contact);
 
export default router;