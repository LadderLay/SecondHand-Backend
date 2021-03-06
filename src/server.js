const express = require('express');
const cors = require("cors");
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const auth = require("./routes/auth");
const admin = require("./routes/admin");
const goods = require("./routes/goods");
const user = require('./routes/user');
const comments = require('./routes/comments');
const cart = require('./routes/cart');
//...路由文件导入
require('dotenv').config()
const mysql = require('mysql');
//const jwt = require('express-jwt');
//const db = require('./sql')
const app = express();
const secret = 'secret123'; //密钥
const port = 3001;

const jwtAuth = expressJwt({
    secret: secret,
    algorithms:['HS256'],
    credentialsRequired: false
}).unless({
    path: [ //指定路径不经过 Token 解析
        '/auth/login',
        '/auth/signup',
        '/admin/login',
    ]  
})
exports.jwtAuth = jwtAuth;//...

app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*') // 允许访问的域
    res.header('Access-Control-Allow-Headers', 'authorization') // 允许携带的头
    //res.header('Access-Control-Allow-Headers”, “Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
    //res.header('Access-Control-Allow-Methods”,“PUT,POST,GET,DELETE,OPTIONS');
	next() // 放行
})

app.use(cors());

// app.all('*', function(req, response, next) {
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     response.header("Access-Control-Allow-Origin", "*");
//     //允许的header类型
//     response.header("Access-Control-Allow-Headers", "X-Requested-With");
//     //跨域允许的请求方式
//     response.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     //设置响应头信息
//     response.header("X-Powered-By",' 3.2.1')
//     response.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

app.use(jwtAuth);
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
    //当token验证失败时会抛出如下错误
    if (err.name === 'UnauthorizedError') {   
        res.status(401).send(err.inner);
    }
})

connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : 'secondHand'    
});
connection.connect();

app.use("/auth", auth);
app.use("/admin",admin);
app.use("/goods",goods);
app.use("/user", user);
app.use("/comments", comments);
app.use("/cart", cart);
//路由配置
//...

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})