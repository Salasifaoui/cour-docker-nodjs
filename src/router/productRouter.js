const express = require('express');
const router = express.Router();
const {getAllProducts,getProduct} = require('../database/products')
router.get('/',async (req,res) =>{
    const products = await getAllProducts();
    
    res.send({
        status: "OK",
        data: products
    })
});

router.get('/:productId', async (req,res) =>{
    try {
        const product = await getProduct(req.params.productId);

        if (!product) {
            res.send({status: 'FAILED', error: 'Product not found'})
            return;
        }
    
    res.send({
        status: "ok",
        data: product
    })
    } catch (error) {
        res.status(401).send({
            status: "Failed",
            error: error.message
        })
    }
    
})
module.exports = router;