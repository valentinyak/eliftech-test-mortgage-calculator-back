const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: [true, "Login is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
