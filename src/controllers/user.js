
const callback = (res) => (err, data) => {
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

exports.callback = callback;
exports.publishPost = ( req, res) => {
    // 发布商品
}
exports.publishGet = ( req, res ) => {
    const { user_id } = req.query
    let sql = `select * from products where product_seller = ${user_id}`
    connection.query(sql, callback(res))
}
exports.buy = ( req, res ) => {
    const { user_id } = req.query
    let sql = `select * from products, buylists where buylists.product_id = products.product_id and buylists.user_id = ${user_id}`
    connection.query(sql, callback(res))
}

exports.sell = ( req, res ) => {
    const { user_id } = req.query
    let sql = `select * from products where product_seller = ${user_id}`
    connection.query(sql, callback(res))
}