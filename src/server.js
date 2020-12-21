const express = require('express');
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const auth = require("./routes/auth");
const admin = require("./routes/admin");
const goods = require("./routes/goods");
const user = require('./routes/user');
const comments = require('./routes/comments');
const cart = require('./routes/cart');
//...路由文件导入
const mysql = require('mysql');
//const jwt = require('express-jwt');
//const db = require('./sql')
const app = express();
const secret = 'secret123'; //密钥
const port = 3000;

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

app.use(jwtAuth);
app.use(bodyParser.json());
app.use(function (err, req, res, next) {
    //当token验证失败时会抛出如下错误
    if (err.name === 'UnauthorizedError') {   
        res.status(401).send(err.inner);
    }
})

connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2yuhly',
    database : 'secondHand'    
});
connection.connect();

app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*') // 允许访问的域
	res.header('Access-Control-Allow-Headers', 'authorization') // 允许携带的头
	next() // 放行
})

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