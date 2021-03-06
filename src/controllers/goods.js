const jwt = require("jsonwebtoken");

function produceID() {
    return Date.now().toString();
}

exports.list = (req, res) => {
    let sql = `SELECT * FROM products WHERE product_state = 1`;
    connection.query(sql, (err, data) => {
        if(err) throw err;
        if(data.length) {
            console.log(data)
            res.json({list:data})
        } else {
            res.json({res:'暂时没有找到您需要的商品。'})
        }
    })
}

exports.detail = (req, res) => {
    const id = req.query.id;
    let sql = `SELECT * FROM products WHERE product_id='${id}'`;
    connection.query(sql, (err, data) => {
        if(err) throw err;
        if(data.length) {
            res.json({detail:data})
        } else {
            res.json({res:'出错了呢。'})
        }
    })
    //评论部分是否要单独处理？Q
}

exports.publish = (req, res) => {
    const state = 1;
    //暂时省略了对pic的处理
    const { name, type, describe, detail, user, price, time } = req.body;
    const pic = "https://lh3.googleusercontent.com/proxy/Hbwgg-j71V5llEVAVI9_qQufUC979v4B2wNWncSHCZGpt1i8hERpOHN1PDLS3nNaGvqNRwMgACd7JYYu5krTLrGx2QaBALHTSsNuHA"
    let sql = 'INSERT INTO products (product_name,product_class,product_describe,product_detail,product_state,product_price,product_time,product_seller,product_pic) VALUES(?,?,?,?,?,?,?,?,?)'; 
    const value = [name, type, describe, detail, state, price, time, user, pic];
    connection.query(sql, value, (err, data) => {
        if(err) {
            console.log(err)
            res.json(403,{code: 0, res: '发布失败。请稍后再试。'});
        } else {
            console.log(sql)//
            res.json({code: 1, res: '发布成功！'})
        }
    })
}

exports.del = (req, res) => {
    const {product_id, seller} = req.body;
	console.log(req.body)//
    let sqlStr = `UPDATE products SET product_state=2 WHERE product_id='${product_id}'+product_seller='${seller}'`;
	connection.query(sqlStr, (err, data) => {
		if (err){
            console.log(err)
            res.json(401,{code: 0, res: '商品删除失败.'});
        } else {
            res.json({ code: 0, res: '商品删除成功!'})
        }
	})   
}