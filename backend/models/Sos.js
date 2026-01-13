import mongoose from "mongoose";

const sosSchema = new mongoose.Schema({
  name: String,
  location: String
}, { timestamps: true });

export default mongoose.model("SOS", sosSchema);
