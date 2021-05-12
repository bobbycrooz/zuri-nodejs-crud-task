const payloadDB = require("../models/payloadModels");

exports.getPayload = async (req, res) => {
  try {
    const payloadData = await payloadDB.find();

    if (payloadData) return res.status(200).json(payloadData);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};


exports.createPayload = async (req, res) => {
  const payloadData = req.body;
  console.log(payloadData);
  const newPayload = new payloadDB(payloadData);

  try {
    await newPayload.save();
    res.status(200).json(newPayload);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};


exports.updatePayload = async (req, res) => {
  const { id: _id } = req.params;
  const newPayloadData = req.body;

  try {
    const UpdatedPayload = await payloadDB.findByIdAndUpdate(
      _id,
      newPayloadData,
      {
        new: true,
      }
    );
    res.status(200).json({ UpdatedPayload });
  } catch (e) {
    console.log(e.message);
    res.status(409).json({ message: e.message });
  }
};


exports.deletePayload = async (req, res) => {
  const { id: _id } = req.params;

  await payloadDB.findByIdAndDelete(_id);

  res.status(409).json({ message: "deleted successfully" });
};
