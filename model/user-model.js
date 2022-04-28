const User = require("./schemas/user-schema");

const listUsers = async () => {
  const users = await User.find({});
  return users;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

const removeUser = async (userId) => {
  const user = await User.findByIdAndRemove(userId);
  return user;
};

const addUser = async (body) => {
  const user = await User.create(body);
  return user;
};

const updateUser = async (userId, body) => {
  const serchedUser = await getUserById(userId);

  if (serchedUser) {
    const user = await User.findByIdAndUpdate(
      {
        _id: userId,
      },
      { ...body },
      { new: true }
    );
    return user;
  } else {
    return {};
  }
};

module.exports = {
  listUsers,
  getUserById,
  removeUser,
  addUser,
  updateUser,
};
