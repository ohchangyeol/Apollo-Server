// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient();
// const board  = await prisma.board.findMany();
// console.log(board);

// import conn from "../config/maria.js";

import mysql from 'mysql2/promise';
import dotenv from 'dotenv'
import createMapper from "../database/mapper/index.js";
import mybatisMapper from 'mybatis-mapper';

dotenv.config();

const conn = mysql.createPool({
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    database: process.env.DB_NAME,
    connectTimeout: 3000,
    connectionLimit: 30 ,//default 10
    waitForConnections: true,
    connectionLimit: process.env.MAX_CONNECTION,
    maxIdle: process.env.MAX_IDLE,
});

// console.log(__dirname);

createMapper


const query = mybatisMapper.getStatement('boardMapper','getBoardList', { language: 'sql', indent: '  ' } );

console.log(query);

const test = async()=>{
    const connnn = await conn.getConnection();
    const [res] = await connnn.query(query);
    connnn.release();
    return res;
}

console.log(await test());


// console.log(res);

// const [test ] = client.query("select * from board");

// console.log(test);

// conn.query("select * from board" , (error, rows, fields) => {
//     if(error) throw error;
//     console.log(rows);
// });

// conn.end();