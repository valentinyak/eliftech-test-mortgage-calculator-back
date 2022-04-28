const express = require("express");
const router = express.Router();
const userController = require("../../controller/users-controller");

router.get("/", userController.getAllUsers).post("/", userController.addUser);

router
  .get("/:userId", userController.getUserByID)
  .delete("/:userId", userController.deleteUser)
  .patch("/:userId", userController.updateUser);

module.exports = router;
