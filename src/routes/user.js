const express = require('express');
const router = express.Router();

const { publishGet, publishPost, buy, sell } = require("../controllers/user");

router.route("/publish").get(publishGet);
router.route("/publish").post(publishPost);
router.route("/buy").get(buy);
router.route("/sell").get(sell);

module.exports = router;