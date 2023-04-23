import { Router } from "express";
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
router.get("/edit/:id", getShop);
router.patch("/edit/:id", editShop);
router.delete("/:id", deleteShop);
router.post("/getshopsnearme", getShopsNearMe);
router.post("/nearme", getShopsNearMe);

export default router;
