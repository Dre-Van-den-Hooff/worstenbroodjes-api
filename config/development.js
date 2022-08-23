module.exports = {
  database: {
    DB_URI: process.env.DB_URI,
  },
  argon: {
    saltLength: 16,
    hashLength: 32,
    timeCost: 6,
    memoryCost: 2 ** 17,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expirationInterval: 60 * 60 * 1000, // ms (1 hour)
    issuer: "http://localhost:3000",
    audience: "http://localhost:3000",
  },
};
