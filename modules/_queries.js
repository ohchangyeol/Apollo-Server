import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        boards( idx:Int 
                title : String ) : [board]
        board(idx : Int!) : board
    }   
`;

export default typeDefs;