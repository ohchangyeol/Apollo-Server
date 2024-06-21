import { gql } from "apollo-server";

const typeDefs = gql`
    type Mutation {
        createBoard (   title     :String,
                        content   :String
                        category : String) : getMessage
        
        deleteBoard(idx : Int!) : getMessage

        updateBoard (idx : Int!,
                    title : String!,
                    content : String!) : getMessage
    }
`;

export default typeDefs ;