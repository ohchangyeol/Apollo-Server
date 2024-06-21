import { gql } from "apollo-server";

const typeDefs = gql`
    

    type Query {
        boardList( idx: Int 
                page : Int!
                limit : Int!
                title : String ) : getboardList

        board(idx : Int!) : getboardDtail
    }   
`;

export default typeDefs;