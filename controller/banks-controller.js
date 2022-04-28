const Banks = require("../model/bank-model");

const getAllBanks = async (req, res, next) => {
  try {
    const banks = await Banks.listBanks();

    res.json({ status: "success", code: 200, data: banks });
  } catch (error) {
    next(error);
  }
};

const getBankByID = async (req, res, next) => {
  try {
    const bank = await Banks.getBankById(req.params.bankId);

    if (bank) {
      res.json({ status: "success", code: 200, data: bank });
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

const addBank = async (req, res, next) => {
  try {
    const bank = await Banks.addBank(req.body);

    if (bank) {
      res.status(201).json({ status: "success", code: 201, data: bank });
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

const deleteBank = async (req, res, next) => {
  const bank = await Banks.removeBank(req.params.bankId);

  if (bank) {
    res.json({ status: "success", code: 200, message: "bank deleted" });
  } else {
    res.status(404).json({ status: "error", code: 404, message: "Not found" });
  }
};

const updateBank = async (req, res, next) => {
  if (JSON.stringify(req.body) !== JSON.stringify({})) {
    const bank = await Banks.updateBank(req.params.bankId, req.body);
    if (bank.id) {
      res.json({ status: "success", code: 200, data: bank });
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
  getAllBanks,
  getBankByID,
  addBank,
  deleteBank,
  updateBank,
};
