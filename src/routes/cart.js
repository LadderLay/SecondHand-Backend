const express = require('express')
const router = express.Router();

const {cartList, cartDel, cartAdd, checkout} = require('../controllers/cart');

router.route('/list').get(cartList); // 查询购物车
router.route('/list').delete(cartDel); // 删除购物车 成批
router.route('/add').post(cartAdd);
router.route('/checkout').post(checkout);
module.exports = router;