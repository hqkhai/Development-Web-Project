const productService = require('./productService')

class productController{
    async list(req, res, next){
        const products = await productService.getAll()
        res.status(200).json({products})
    }

    add(req, res, next){
        try{
            const product = req.body
            const newProduct = productService.insert(product)
            res.status(200).json({newProduct})
        }
        catch(err){

        }
    }
}

module.exports = new productController