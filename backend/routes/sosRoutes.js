import express from "express";
import { createSOS, getAllSOS } from "../controllers/sosController.js";

const router = express.Router();

router.post("/", createSOS);
router.get("/", getAllSOS);

export default router;
