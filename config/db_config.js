const mysql = require('mysql');

// 환경 변수 사용
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) {
        console.error('MySQL 연결 실패: ', err);
        throw err;
    }
    console.log('MySQL 연결 성공');
});

module.exports = db;
