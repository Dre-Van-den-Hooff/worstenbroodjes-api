const uuid = require("uuid");
const userModel = require("../data/models/user");
const { hashPassword } = require("../helpers/password");

const fetchAllUsers = async () => {
  return await userModel.find();
};

const fetchUserByName = async username => {
  return await userModel.findOne({ username });
};

const fetchUserById = async id => {
  return await userModel.findById(id);
};

const createUser = async (username, password) => {
  // user with this name already exists
  if (await fetchUserByName(username)) {
    return null;
  }

  const hashedPassword = await hashPassword(password);

  const defaultStats = {
    totalSpent: 0,
    lastPurchase: "NONE",
    worstenbroodjes: 0,
    pizzas: 0,
    muffins: 0,
    paninis: 0,
  };

  return await userModel.create({
    id: uuid.v4(),
    username,
    password: hashedPassword,
    stats: defaultStats,
  });
};

const updateUser = async (id, newName) => {
  // user with this name already exists
  if (await fetchUserByName(newName)) {
    return null;
  }

  return await userModel.findByIdAndUpdate(id, { username: newName });
};

module.exports = {
  fetchAllUsers,
  fetchUserByName,
  fetchUserById,
  createUser,
  updateUser,
};
