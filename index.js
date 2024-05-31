import { ApolloServer} from "apollo-server";
import {queries} from "./modules/_queries";
import {mutation} from "./modules/_mutation";
import { board } from "./modules/board";
const typeDefs = [
  queries,
  mutation,
  board.typeDefs
];
const resolvers = [
  board.resolvers
];

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)
})  

