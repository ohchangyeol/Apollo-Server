import { gql } from "apollo-server";

const typeDefs = gql`
    enum Category {
        test # 테스트
        notice # 공지
        life # 일상
    } 
`


export default typeDefs;