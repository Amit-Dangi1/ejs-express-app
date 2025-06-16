import express from "express";
import { buy, getBy_Id, order_info, save_in_bulk } from "../controller/product.js";
import auth from "../middleware/auth.js";


const router  = express.Router();

router.post("/save-in-bulk",save_in_bulk);
router.get("/:product_id",auth,getBy_Id)
router.get("/buy/:product_id",auth,buy);
router.post("/order",auth,order_info);
 

export default router;
