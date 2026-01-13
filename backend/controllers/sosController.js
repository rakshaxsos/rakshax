import SOS from "./models/Sos.js";

export const createSOS = async (req, res) => {
  const sos = await SOS.create(req.body);
  res.json(sos);
};

export const getAllSOS = async (req, res) => {
  const data = await SOS.find().sort({ createdAt: -1 });
  res.json(data);
};
