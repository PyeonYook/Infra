const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user_controller');

// 회원가입 API
router.post('/signup', UserController.createUser);

// 사용자 정보 조회 API
router.get('/user/:id', UserController.getUser);

module.exports = router;
