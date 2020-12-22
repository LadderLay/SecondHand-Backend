const express = require('express');
const router = express.Router();
const { login, del } = require("../controllers/admin");

router.route("/login").post(login);
router.route("/del").delete(del);

module.exports = router;