const Product = require('./productModel')

const getAll = () =>{
    return Product.find()
}
const insert = (product) =>{
    const newProduct = new Product(product)
    return newProduct.save()
}

module.exports = {getAll, insert}