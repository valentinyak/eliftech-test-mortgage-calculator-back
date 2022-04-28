const Users = require("../model/user-model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await Users.listUsers();

    res.json({ status: "success", code: 200, data: users });
  } catch (error) {
    next(error);
  }
};

const getUserByID = async (req, res, next) => {
  try {
    const user = await Users.getUserById(req.params.userId);

    if (user) {
      res.json({ status: "success", code: 200, data: user });
    } else {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Not Found",
      });
    }
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const user = await Users.addUser(req.body);

    if (user) {
      res.status(201).json({ status: "success", code: 201, data: user });
    } else {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing required field",
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const user = await Users.removeUser(req.params.userId);

  if (user) {
    res.json({ status: "success", code: 200, message: "user deleted" });
  } else {
    res.status(404).json({ status: "error", code: 404, message: "Not found" });
  }
};

const updateUser = async (req, res, next) => {
  if (JSON.stringify(req.body) !== JSON.stringify({})) {
    const user = await Users.updateUser(req.params.userId, req.body);
    if (user.id) {
      res.json({ status: "success", code: 200, data: user });
    } else {
      res
        .status(404)
        .json({ status: "error", code: 404, message: "Not found" });
    }
  } else {
    res
      .status(400)
      .json({ status: "error", code: 400, message: "missing fields" });
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  addUser,
  deleteUser,
  updateUser,
};
