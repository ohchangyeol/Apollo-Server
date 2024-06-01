import { ApolloServer} from "apollo-server";

import mutation from "./modules/_mutation.js";
import queries from "./modules/_queries.js";
import enums from "./modules/_enums.js";

import board from "./modules/board.js";

console.log(board);

const typeDefs = [
  queries,
  mutation,
  enums,
  board.typeDefs
];
const resolvers = [
  board.resolvers
];

const server = new ApolloServer({ typeDefs , resolvers })
server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)
})  

