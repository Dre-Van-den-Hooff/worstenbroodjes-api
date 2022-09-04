const {
  fetchUserById,
  createUser,
  updateUserName,
  fetchAllUsers,
  updateUserStats,
} = require("../services/userService");
const { loginUser } = require("../helpers/login");

const resolvers = {
  Query: {
    getById: async (_, { id }) => await fetchUserById(id),
    getAllUsers: async () => await fetchAllUsers(),
  },
  Mutation: {
    registerUser: async (_, { username, password }) => await createUser(username, password),
    updateName: async (_, { id, newName }) => await updateUserName(id, newName),
    login: async (_, { username, password }) => await loginUser(username, password),
    updateStats: async (_, { id, stats }) => await updateUserStats(id, stats),
  },
};

module.exports = { resolvers };
