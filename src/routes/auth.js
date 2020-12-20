const express = require('express');
const router = express.Router();
const { login, signup } = require("../controllers/auth");
const jwtAuth = require('../server')

router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;