const express = require('express')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
//const connection = require('./connection.js')
const jwt= require('jsonwebtoken');
const app = express()
const port = 3000
const secret = 'secret123'; //密钥

const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'login_test'
});
 
connection.connect();



const jwtAuth = expressJwt({
    secret: secret,
    algorithms:['HS256'],
    credentialsRequired: true//q
}).unless({
    path: [ //指定路径不经过 Token 解析
        '/login',
        '/signup'
    ]  
})
app.use(bodyParser.json());
app.use(jwtAuth);

app.use(function (err, req, res, next) {
    //当token验证失败时会抛出如下错误
    if (err.name === 'UnauthorizedError') {   
        //这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
        res.status(401).send('invalid token...');
    }
})
app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*') // 允许访问的域
	res.header('Access-Control-Allow-Headers', 'authorization') // 允许携带的头
	next() // 放行
})

//登录
app.post('/login', (req, res) => {
	// 接收参数
	let {account, password} = req.body;

	const sqlStr = `select * from users where account='${account}' and password='${password}'`;
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
		} else {
			res.json({code: 1, res: '用户名或密码错误!'})
		}
	})
})  //错误判断简化了

//注册
app.post('/signup', (req, res) => {
    let {account, password} = req.body;
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})