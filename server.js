const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// 라우트 추가
const userRoutes = require('./routes/user_routes');
app.use('/api', userRoutes);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`서버가 포트 ${PORT}에서 시작되었습니다.`));
