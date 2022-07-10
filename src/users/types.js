import { gql } from "apollo-server";

const typeDefsUsers = gql`
type User {
  id: ID!
  firstName: String
  lastName: String
  email: String!
  password: String!
}

input RegisterInput {
  firstName: String
  lastName: String
  email: String!
  password: String!
}

input LoginInput {
  email: String!
  password: String!
}

type Query {
  getUser(id: ID!): User!
  login(login: LoginInput!): String!
}

type Mutation {
  register(register: RegisterInput!): User
}

`;

export default typeDefsUsers;