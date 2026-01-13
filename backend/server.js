import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import sosRoutes from "./routes/sosRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/sos", sosRoutes);

app.listen(process.env.PORT, () => {
  console.log("RakshaX backend running");
});
