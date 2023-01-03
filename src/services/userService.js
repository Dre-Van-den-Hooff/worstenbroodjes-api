const uuid = require("uuid");
const userModel = require("../data/models/user");
const { hashPassword } = require("../helpers/password");

const fetchAllUsers = async () => {
  console.log("Get all users");
  return await userModel.find();
};

const fetchUserByName = async username => {
  return await userModel.findOne({ username });
};

const fetchUserById = async id => {
  return await userModel.findOne({ id });
};

const createUser = async (username, password) => {
  // user with this name already exists
  if (await fetchUserByName(username)) {
    throw new Error("Er bestaat al een gebruiker met deze gebruikersnaam.");
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

const updateUserName = async (id, newName) => {
  // user with this name already exists
  if (await fetchUserByName(newName)) {
    throw new Error("Er bestaat al een gebruiker met deze gebruikersnaam.");
  }

  return await userModel.findOneAndUpdate({ id }, { username: newName });
};

const updateUserStats = async (id, stats) => {
  return await userModel.findOneAndUpdate({ id }, { stats });
};

module.exports = {
  fetchAllUsers,
  fetchUserByName,
  fetchUserById,
  createUser,
  updateUserName,
  updateUserStats,
};
