import { gql } from "apollo-server";

const typeDefs = gql`
    type Mutation {
        createBoard (   title     :String,
                        content   :String
                        category : String) : board
        
        deleteBoard(idx : Int!) : board

        updateBoard (idx : Int!,
                    title : String,
                    content : String) : board
    }
`;

export default typeDefs ;