const productRouter = require('../components/products/products')
const cartRouter = require('../components/cart/cart')
function route(app){
    app.use('/product', productRouter)
    app.use('/cart', cartRouter)
}

module.exports = route