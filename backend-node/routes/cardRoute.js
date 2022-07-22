import express from "express";
import { addCard, getCardData } from "../controllers/cardController";

const cardRoutes = express.Router();

cardRoutes.route("/getdata").get(getCardData);
cardRoutes.route("/card").post(addCard);

export default cardRoutes;
