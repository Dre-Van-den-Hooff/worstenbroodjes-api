const uuid = require("uuid");
const userModel = require("../data/models/user");
const { hashPassword } = require("../helpers/password");

const fetchUserByName = async name => {
  return await userModel.findOne({ name });
};

const fetchUserById = async id => {
  return await userModel.findById(id);
};

const createUser = async (name, password) => {
  // user with this name already exists
  if (await fetchUserByName(name)) {
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
    name,
    password: hashedPassword,
    stats: defaultStats,
  });
};

const updateUser = async (id, newName) => {
  // user with this name already exists
  if (await fetchUserByName(newName)) {
    return null;
  }

  return await userModel.findByIdAndUpdate(id, { name: newName });
};

module.exports = {
  fetchUserByName,
  fetchUserById,
  createUser,
  updateUser,
};
