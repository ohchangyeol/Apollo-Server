const conn = mysql.createPool();

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