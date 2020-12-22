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
			res.json({code: 1, res: '用户名或密码错误!'})
		}
	})    
}

exports.del = (req, res) => {
    const product_id = req.param.id;
    //删除product表
    //检查购物车表和清单表，删除对应的商品
    //问题：操作1成功而
    let sqlStr1 = 'DELETE ';
	let sqlStr2 = `SELECT * FROM admins WHERE admin_id='${account}' AND admin_password='${password}'`;
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
			res.json({code: 1, res: '用户名或密码错误!'})
		}
	})    
}