const Bank = require("./schemas/bank-schema");

const listBanks = async () => {
  const banks = await Bank.find({});
  return banks;
};

const getBankById = async (bankId) => {
  const bank = await Bank.findById(bankId);
  return bank;
};

const removeBank = async (bankId) => {
  const bank = await Bank.findByIdAndRemove(bankId);
  return bank;
};

const addBank = async (body) => {
  const bank = await Bank.create(body);
  return bank;
};

const updateBank = async (bankId, body) => {
  const serchedBank = await getBankById(bankId);

  if (serchedBank) {
    const bank = await Bank.findByIdAndUpdate(
      {
        _id: bankId,
      },
      { ...body },
      { new: true }
    );
    return bank;
  } else {
    return {};
  }
};

module.exports = {
  listBanks,
  getBankById,
  removeBank,
  addBank,
  updateBank,
};
