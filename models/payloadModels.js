const mongoose = require("mongoose");

const payLoadSchema = mongoose.Schema({
  message: String,
  data: {
    name: String,
    email: String,
    country: String,
  },
});

module.exports = payModel = mongoose.model("payloadModel", payLoadSchema);
