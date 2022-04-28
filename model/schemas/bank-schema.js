const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    interest_rate: {
      type: Number,
      required: [true, "Interest rate is required"],
      unique: false,
    },
    max_loan: {
      type: Number,
      required: [true, "Max loan is required"],
      unique: false,
    },
    min_down_payment: {
      type: Number,
      required: [true, "Min down payment is required"],
      unique: false,
    },
    loan_term: {
      type: Number,
      required: [true, "Loan term is required"],
      unique: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Bank = mongoose.model("bank", bankSchema);

module.exports = Bank;
