const express = require('express');
const router = express.Router();
const { list, detail, publish, del } = require("../controllers/goods");

router.route("/").get(list);
router.route("/detail").get(detail);
router.route("/publish").post(publish);
router.route("/del").delete(del);

module.exports = router;