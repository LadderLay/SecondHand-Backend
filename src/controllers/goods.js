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
    const id = produceID();
    const state = 1;
    //暂时省略了对pic的处理
    const { name, type, describe, detail, user, price, time } = req.body;
    //pic = undefined || ...设置默认图片
    let sql = 'INSERT INTO products (product_id,product_name,product_class,product_describe,product_detail,product_state,product_price,product_time,product_seller) VALUES(?,?,?,?,?,?,?,?,?)'; 
    const value = [id, name, type, describe, detail, state, price, time, user];
    connection.query(sql, value, (err, data) => {
        if(err) {
            console.log(err)
            res.json({code: 0, res: '发布失败。请稍后再试。'});
        } else {
            res.json({code: 1, res: '发布成功！'})
        }
    })
}

exports.del = (req, res) => {
    //
}