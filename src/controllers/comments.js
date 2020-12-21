const { callback } = require('./user')

const callbackTest = ( err, data ) => {
    if(err) throw err
    // sql执行就会有data吗？？到时候再改
    // select 结果为空的{data: []}
    // insert 
    if(data){
        console.log(data)
        res.json({data})
    }else{
        res.json({msg:"已执行，无数据"})
    }
}
exports.sendGet = ( req, res ) => {
    const { user_id } = req.query
    let sql = `select * from comments, products
               where comments.user_id = ${user_id}
               and comments.product_id = products.product_id`
    // ?? callback 一定需要传参数res吗，connection这个变量外部的呀！！
    // 作用域的问题 显然在这里是可以访问到connection的，但是callback无法访问到res
    // 不传会error
    connection.query(sql, callback(res))
} 

exports.sendPost = ( req, res ) => {
    // 发布评论是商品详情页
}

exports.receive = ( req, res ) => {
    const { user_id } = req.query
    let sql = `select * from comments, products
                where products.product_seller = ${user_id}
                and products.product_id = comments.product_id`
    connection.query(sql, callback(res))
}