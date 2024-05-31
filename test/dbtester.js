import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const board  = await prisma.board.findMany();
console.log(board);

