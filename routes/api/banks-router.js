const express = require("express");
const router = express.Router();
const bankController = require("../../controller/banks-controller");

router.get("/", bankController.getAllBanks).post("/", bankController.addBank);

router
  .get("/:bankId", bankController.getBankByID)
  .delete("/:bankId", bankController.deleteBank)
  .patch("/:bankId", bankController.updateBank);

module.exports = router;
