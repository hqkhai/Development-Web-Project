const cartService = require('./cartService')

class cartController{
    list(req, res, next){
        try{
            const carts = cartService.getAll()
            res.status(200).json({carts})
        }
        catch(err){

        }
        
    }
    add(req, res, next){
        try{
            const cart = req.body
            const newCart = cartService.insert(cart)
            res.status(200).json({newCart})
        }
        catch(err){

        }
    }
}

module.exports = new cartController