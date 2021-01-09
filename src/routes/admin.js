const express = require('express');
const router = express.Router();
const { login, userDel, users, goods, goodsDel } = require("../controllers/admin");

router.route("/login").post(login);
//router.route("/users").delete(userDel);
router.route("/users").get(users);
router.route("/goods").delete(goodsDel);
router.route("/goods/").get(goods); 

module.exports = router;