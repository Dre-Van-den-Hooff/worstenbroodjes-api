const { generateJWT, verifyJWT } = require("./jwt");
const { verifyPassword } = require("../helpers/password");
const { fetchUserByName } = require("../services/userService");

const loginUser = async (username, password) => {
  const user = await fetchUserByName(username);

  if (!user) {
    throw new Error("Username and password don't match");
  }

  if (await verifyPassword(password, user.password)) {
    console.log("login successful");
    return makeLoginData(user);
  }

  return null;
};

const makeLoginData = async user => {
  const token = await generateJWT(user);
  return {
    user: makeExposedUser(user),
    token: token,
  };
};

const makeExposedUser = ({ id, username, password, stats }) => {
  return {
    id,
    username,
    password,
    stats,
  };
};

const checkAndParseSession = async authHeader => {
  if (!authHeader) {
    throw new Error("You need to be signed in");
  }

  if (!authHeader.startsWith("Bearer ")) {
    throw new Error("Invalid authentication token");
  }

  const authToken = authHeader.substring(7);

  try {
    const { userId } = await verifyJWT(authToken);
    return {
      userId,
      authToken,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { loginUser, checkAndParseSession };
