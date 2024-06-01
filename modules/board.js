import { gql } from "apollo-server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

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
        boards: async(arent, args, context, info) => await prisma.board.findMany({
            where: {
                title: {
                    search: args.title,
                },
            },
            // 페이징처리
            skip : args.idx ? 1 : 0, 
            take : 10,
            ...(args.idx && {cursor: { idx: args.idx }})
        }),

        board:  async(parent, args, context, info) => await prisma.board.findUnique({
            where : {
                idx : args.idx
            },
        }),
    },
    /** 생성, 수정, 삭제 */
    Mutation : {
        createBoard : async(parent, args, context, info)=> await prisma.board.create({
            data : {
                title : args.title,
                content :args.content,
                category : args.category
            }
        }) ,
        deleteBoard : async(parent, args, context, info) => await prisma.board.delete({
            where : {
                idx : args.idx
            }
        }),
        updateBoard : async(parent, args, context, info)=> await prisma.board.update({
            where : {
                idx : args.idx
            },
            data: {
                title : args.title,
                content :args.content,
            }
        })
    }
}

export default {
    typeDefs : typeDefs,
    resolvers: resolvers
}