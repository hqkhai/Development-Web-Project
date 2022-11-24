const Cart = require('./cartModel')

const getAll = async () =>{
    return await Cart.find()
}
const insert = async (cart) =>{
    const newCart = new Cart(cart)
    return await newCart.save()
}


module.exports = {getAll, insert}