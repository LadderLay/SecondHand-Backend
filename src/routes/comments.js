const express = require('express')
const router = express.Router();

const { sendGet, sendPost, receive } = require('../controllers/comments');

router.route('/send').get(sendGet);
router.route('/send').post(sendPost);
router.route('/receive').get(receive);

module.exports = router;