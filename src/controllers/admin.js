const jwt = require("jsonwebtoken");
const secret = 'secret123'; 
exports.login = (req, res) => {
	let {account, password} = req.body;

	let sqlStr = `SELECT * FROM admins WHERE admin_id='${account}' AND admin_password='${password}'`;
	connection.query(sqlStr, (err, data) => {
		if (err) throw err; 
		if (data.length) { 
            console.log(data)//delete
			// 3. 生成token 注意默认情况 Token 必须以 Bearer+ ?开头 Q
			const token = 'Bearer' + jwt.sign(
                Object.assign({},  data[0]), 
                secret, 
                {
			        expiresIn:  3600 * 24 * 3 // 过期时间
                }
            )

			res.json({ code: 0, res: '管理员登录成功!', token })
        } else { //错误判断简化了'
			res.json(403,{code: 1, res: '用户名或密码错误!'})
		}
	})    
}

exports.goodsDel = (req, res) => {
    const {product_id} = req.query;
	console.log(product_id)
    let sqlStr = `UPDATE products SET product_state=2 WHERE product_id='${product_id}'`;
	connection.query(sqlStr, (err, data) => {
		if (err) throw err; 
		res.json({ code: 0, res: '商品删除成功!'})
	})    
}
exports.goods = (req, res) => {
	let sqlStr = `SELECT * FROM products`;
	connection.query(sqlStr, (err, data) => {
		if (err) throw err; 
        if(data.length) {
            console.log(data)
            res.json({list:data})
        } else {
            res.json(403,{res:'列表获取失败。'})
        }
	})
}
exports.users = (req, res) => {
	let sqlStr = `SELECT * FROM users`;
	connection.query(sqlStr, (err, data) => {
		if (err) throw err; 
        if(data.length) {
            console.log(data)
            res.json({list:data})
        } else {
            res.json(403,{res:'列表获取失败。'})
        }
	})
}
exports.userDel = (req, res) => {

}