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
    """목록 조회"""
    type getboardList {
        code: String
        message: String
        data: resBoardList
    }
    """목록 조회 응답"""
    type resBoardList {
        rowCount: Int
        total: Int
        rows: [board]
    }

    """상세 조회"""
    type getboardDtail {
        code: String
        message: String
        data: board
    }
    
    """응답"""
    type getMessage{
        code: String
        message : String
    }

`;

const resolvers = {
    /** 조회 */
    Query: {
        boardList: async(arent, args, context, info) => await boardList(args),

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