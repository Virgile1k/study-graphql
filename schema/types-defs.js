const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String! 
    username: String!
    age: Int!
    nationality: nationality
    friends: [User]
    favoriteMovies:[Movie]
  }
  
  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }
  
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie
  }
  
  
  enum nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`; 

module.exports = { typeDefs };
