const express = require('express');
const router = express.Router();
const { login, signup } = require("../controllers/auth");
const jwtAuth = require('../server')

router.route("/signup").post(signup); //注册
router.route("/login").post(login);   //登录

module.exports = router;