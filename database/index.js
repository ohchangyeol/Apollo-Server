import mysql from 'mysql2/promise';
import createMapper from "./mapper/index.js";
import dotenv from 'dotenv'
import mybatisMapper from 'mybatis-mapper';

dotenv.config();

const dbConfig = {
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
}

function getConnection() {
    const pool = mysql.createPool(dbConfig);
    createMapper; 
    return pool.getConnection();
}

export async function queryRead(query) {
    const client = await getConnection();

    // console.log(client);

    const [result] = await client.query(query);

    try {
        if(Array.isArray(result)){
            return {error: false, rows: result, rowCount: result.length};
        }else{
            return {error: false, rows: [result], rowCount: result.affectedRows};
        }
    } catch (error) {
        await client.rollback(); // 에러 발생 시 트랜잭션 롤백
        console.error('Database 쿼리 오류 발생:', error.message);
        // 에러 리턴하도록 errorResult 생성
        return {error: true, rows: [], rowCount: 0};
    } finally {
        client.release();
    }
}

export async function queryWrite(query) {
    const client = await getConnection();
    await client.beginTransaction(); // 트랜잭션 시작

    const [result] = await client.query(query);

    try {
        if(Array.isArray(result)){
            await client.commit(); // 트랜잭션 커밋
            return {error: false, rows: result, rowCount: result.length};
        }else{
            await client.commit(); // 트랜잭션 커밋
            return {error: false, rows: [result], rowCount: result.affectedRows};
        }
    } catch (error) {
        await client.rollback(); // 에러 발생 시 트랜잭션 롤백
        console.error('Database 쿼리 오류 발생:', error.message);
        // 에러 리턴하도록 errorResult 생성
        return {error: true, rows: [], rowCount: 0};
    } finally {
        client.release();
    }
}

export function mybatisMappersWithContext(mapperName, queryName , params) {
    try {
        if (params) {
            const result = mybatisMapper.getStatement(mapperName, queryName, params, {language: 'sql', indent: '  '});
            return result;
        } else {
            const result = mybatisMapper.getStatement(mapperName, queryName, {language: 'sql', indent: '  '});
            return result;
        }
    } catch (error) {
        console.log(error);
    }
}