import { gql } from "apollo-server";

export const queries = gql`
    type Query {
        boards(title : String) : [board]

        board(idx : Int!) : board
    }   
`;

// module.exports = typeDefs;