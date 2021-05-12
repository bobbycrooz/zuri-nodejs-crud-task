const express = require("express");
const {
  getPayload,
  createPayload,
  updatePayload,
  deletePayload,
} = require("../../controllers/payload.js");

const router = express.Router();

router.get("/", getPayload);
router.post("/", createPayload);
router.patch("/:id", updatePayload);
router.delete("/:id", deletePayload);

module.exports = router;
