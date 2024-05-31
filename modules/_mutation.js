import { gql } from "apollo-server";

export const mutation = gql`
    type Mutation {
        createBoard ( title     :String,
                    content   :String) : board
        
        deleteBoard(idx : Int) : board

        updateBoard (idx : Int,
                    title : String,
                    content : String) : board
    }
`;

// module.exports = typeDefs;