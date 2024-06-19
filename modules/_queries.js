import { gql } from "apollo-server";

const typeDefs = gql`
    

    type Query {
        boards( idx: Int 
                page : Int!
                limit : Int!
                title : String ) : boardRes

        board(idx : Int!) : board
    }   
`;

export default typeDefs;