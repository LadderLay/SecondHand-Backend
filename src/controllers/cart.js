const { callback } = require('./user.js')

exports.cartList = (req, res) => {
    const {user_id} = req.query;
    let sql = `select * from cartlists, products
                where cartlists.user_id = ${user_id}
                and cartlists.product_id = products.product_id`
    connection.query(sql, callback(res));
}

// const produceParams = (arr) => {
//     let res = '('
//     for(let i = 0; i < arr.length; i++)
//         res = res + arr[i] + ',';
//     res = res.slice(0, res.length-1) + ')'
//     return res
// }
exports.cartDel = (req, res) => {
    const {product_id_list} = req.body
    let sql = `delete from cartlists where product_id in (${product_id_list})`
    // try{
    //     connection.query(sql, callback(res))
    // }catch(error){
    //     console.error(error);
    // }
    connection.query(sql, callback(res))
}

exports.cartAdd = (req, res) => {
    const {product_id, user_id} = req.body
    let sql = `insert into cartlists(user_id, product_id) values(${user_id}, ${product_id})`
    connection.query(sql, callback(res))
}