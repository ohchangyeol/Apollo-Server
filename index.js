import { ApolloServer, gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const typeDefs = gql`
  type board {
    idx       :Int     
    title     :String
    content   :String
    insert_dt :String
  }
  type Mutation {
    deleteBoard(idx : Int) : board
  }
  type Query {
    boards : [board]
  }
`

const resolvers = {
  Query: {
    boards: async() => await client.board.findMany() ,

  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`)
})  

