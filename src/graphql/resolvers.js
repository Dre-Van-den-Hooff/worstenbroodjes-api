const { fetchUserById, createUser, updateUser } = require("../services/userService");
const { login } = require("../helpers/login");

const resolvers = {
  Query: {
    getById: async (_, { id }) => await fetchUserById(id),
    create: async (_, { name, password }) => await createUser(name, password),
    updateName: async (_, { id, newName }) => await updateUser(id, newName),
    login: async (_, { name, password }) => await login(name, password),
  },
};

module.exports = { resolvers };
