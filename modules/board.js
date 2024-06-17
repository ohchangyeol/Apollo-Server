import { gql } from "apollo-server";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import { boardList, getBoard, saveBoard, deleteBoard, updateBoard } from "../service/boardService.js";

const typeDefs = gql`
    type board {
        idx       : Int     
        title     : String
        content   : String
        category  : String
        insert_dt : String
        update_dt : String
    }
`;

const resolvers = {
    /** 조회 */
    Query: {
        boards: async(arent, args, context, info) => await boardList(args),

        board:  async(parent, args, context, info) => await getBoard(args),
    },
    /** 생성, 수정, 삭제 */
    Mutation : {
        createBoard : async(parent, args, context, info)=>  await saveBoard(args) ,

        deleteBoard : async(parent, args, context, info) =>  await deleteBoard(args),
        
        updateBoard : async(parent, args, context, info)=>  await updateBoard(args)
    }
}

export default {
    typeDefs : typeDefs,
    resolvers: resolvers
}