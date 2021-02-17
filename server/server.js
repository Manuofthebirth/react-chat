const { GraphQLServer } = require('graphql-yoga');

// every GraphQL server needs types ; ! means it's required
const typeDefs = `
  type Message {
    id: ID!
    user: String!
    content: String!
  }

  type Query {
    messages: [Message!]
  }
`;

const server = new GraphQLServer();
server.start(({port}) => {
  console.log(`Server on http://localhost:${post}`)
})