import express from "express";
import {
  addShop,
  getShops,
  getShop,
  editShop,
  deleteShop,
  getShopsNearMe,
} from "../controller/shop-controller.js";

const router = express.Router();

router.post("/add", addShop);
router.get("/all", getShops);
router.get("/get/:id", getShop);
router.patch("/edit/:id", editShop);
router.delete("/delete/:id", deleteShop);
router.post("/getshopsnearme", getShopsNearMe);
router.post("/nearme", getShopsNearMe);

export default router;
