const userModel = require("../models/user");
const uuid = require("uuid");

const TEST_USERS = [
  {
    id: uuid.v4(),
    username: "Quandale Dingle",
    password: "$argon2id$v=19$m=131072,t=6,p=1$n8PceGlROaORxtrxSGjasg$aJsAOVm98GpTvyTHqEnVld5MXA6l5wgA4WgabdSExrs",
    stats: {
      totalSpent: 0,
      lastPurchase: "WORSTENBROODJE",
      worstenbroodjes: 6,
      pizzas: 10,
      muffins: 1,
      paninis: 3,
    },
  },
  {
    id: uuid.v4(),
    username: "Fliep flap",
    password: "$argon2id$v=19$m=131072,t=6,p=1$n8PceGlROaORxtrxSGjasg$aJsAOVm98GpTvyTHqEnVld5MXA6l5wgA4WgabdSExrs",
    stats: {
      totalSpent: 0,
      lastPurchase: "WORSTENBROODJE",
      worstenbroodjes: 100,
      pizzas: 3,
      muffins: 3,
      paninis: 0,
    },
  },
  {
    id: uuid.v4(),
    username: "Copium enjoyer",
    password: "$argon2id$v=19$m=131072,t=6,p=1$n8PceGlROaORxtrxSGjasg$aJsAOVm98GpTvyTHqEnVld5MXA6l5wgA4WgabdSExrs",
    stats: {
      totalSpent: 0,
      lastPurchase: "PANINI",
      worstenbroodjes: 6,
      pizzas: 12,
      muffins: 1,
      paninis: 4,
    },
  },
  {
    id: uuid.v4(),
    username: "Miauw",
    password: "$argon2id$v=19$m=131072,t=6,p=1$n8PceGlROaORxtrxSGjasg$aJsAOVm98GpTvyTHqEnVld5MXA6l5wgA4WgabdSExrs",
    stats: {
      totalSpent: 0,
      lastPurchase: "PANINI",
      worstenbroodjes: 1,
      pizzas: 3,
      muffins: 8,
      paninis: 2,
    },
  },
  {
    id: uuid.v4(),
    username: "Big black man",
    password: "$argon2id$v=19$m=131072,t=6,p=1$n8PceGlROaORxtrxSGjasg$aJsAOVm98GpTvyTHqEnVld5MXA6l5wgA4WgabdSExrs",
    stats: {
      totalSpent: 0,
      lastPurchase: "NONE",
      worstenbroodjes: 0,
      pizzas: 0,
      muffins: 0,
      paninis: 0,
    },
  },
  {
    id: uuid.v4(),
    username: "Lieven Smietn",
    password: "$argon2id$v=19$m=131072,t=6,p=1$n8PceGlROaORxtrxSGjasg$aJsAOVm98GpTvyTHqEnVld5MXA6l5wgA4WgabdSExrs",
    stats: {
      totalSpent: 0,
      lastPurchase: "NONE",
      worstenbroodjes: 7,
      pizzas: 9,
      muffins: 1,
      paninis: 3,
    },
  },
  {
    id: uuid.v4(),
    username: "Donquavious Hinglebottom",
    password: "$argon2id$v=19$m=131072,t=6,p=1$n8PceGlROaORxtrxSGjasg$aJsAOVm98GpTvyTHqEnVld5MXA6l5wgA4WgabdSExrs",
    stats: {
      totalSpent: 0,
      lastPurchase: "NONE",
      worstenbroodjes: 31,
      pizzas: 75,
      muffins: 4,
      paninis: 5,
    },
  },
];

const seedUsers = async () => {
  await userModel.deleteMany({});
  TEST_USERS.forEach(user => userModel.create(user));
};

module.exports = { seedUsers };
