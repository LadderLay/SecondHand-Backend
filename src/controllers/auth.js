const jwt = require("jsonwebtoken");
const secret = 'secret123'; 

exports.signup = (req, res) => {
    const {username, account, password} = req.body;
    console.log(req.body)
    let sqlStr = 'INSERT INTO users (user_name,user_id,user_password) VALUES(?,?,?)';
    const value = [username, account, password];

    connection.query(sqlStr, value, (err, data) => {
        if(err) {
            //console.log('[INSERT ERROR] - ',err.message);
            res.json(403,{code: 0, res: '注册失败，请重新再试。'})
            throw err;
        }

        res.json({code: 1, res:'注册成功！'})
    })    
}
exports.login = (req, res) => {
	let {account, password} = req.body;

	let sqlStr = `SELECT * FROM users WHERE user_id='${account}' AND user_password='${password}'`;
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

			res.json({ code: 0, res: '欢迎你，登录成功!', token })
		} else { //错误判断简化了
			res.json(403,{code: 1, res: '用户名或密码错误!'})
		}
	})    
}