const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  totalSpent: Number,
  lastPurchase: String,
  worstenbroodjes: Number,
  pizzas: Number,
  muffins: Number,
  paninis: Number,
});

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  password: String,
  stats: statsSchema,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
