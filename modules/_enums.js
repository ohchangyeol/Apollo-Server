import { gql } from "apollo-server";

const typeDefs = gql`
    enum Category {
        tests
        notice
        life
    } 
`


export default typeDefs;