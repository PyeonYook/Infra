CREATE DATABASE IF NOT EXISTS PyeonYook;

USE PyeonYook;

CREATE TABLE User (
    stdno INT PRIMARY KEY AUTO_INCREMENT, -- 학번 (Primary Key)
    name VARCHAR(50) NOT NULL,            -- 사용자 이름
    email VARCHAR(100) UNIQUE NOT NULL,   -- 이메일 (UNIQUE 제약 조건)
    password VARCHAR(128) NOT NULL        -- 비밀번호 (암호화된 형태로 저장)
);

CREATE TABLE User (
    stdno INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL,            
    email VARCHAR(100) UNIQUE NOT NULL,   
    password VARCHAR(128) NOT NULL        
);