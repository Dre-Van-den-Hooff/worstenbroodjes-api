const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getById(id: ID!): User!
  }

  type Mutation {
    create(username: String!, password: String!): User
    updateName(id: ID!, newName: String!): User
    login(username: String!, password: String!): LoggedInUser
  }

  type User {
    id: ID!
    username: String!
    password: String!
    stats: Stats
  }

  type Stats {
    totalSpent: Float!
    lastPurchase: Food
    worstenbroodjes: Int!
    pizzas: Int!
    muffins: Int!
    paninis: Int!
  }

  type LoggedInUser {
    user: User!
    token: String!
  }

  enum Food {
    NONE
    PIZZA
    WORSTENBROODJE
    MUFFIN
    PANINI
  }
`;

module.exports = { typeDefs };
