const express = require('express');
const router = express.Router();
const prodService = require('../BL/product.service')


router.get('/', async (req, res) => {
    console.log("products");
    const products =  await prodService.getAllProducts()
    res.send(products);
})

router.get('/:id', async (req, res) => {
    console.log("product");
    const product =  await prodService.getProd({_id:req.params.id})
    res.send(product);
})

router.post('/', async(req, res) => {
    console.log('hello');
    await prodService.createNewProduct(req.body);
    res.send('ok');
})


router.post('/:id', async(req, res) => {
    console.log('hello');
    const newProd = await prodService.updateProduct(req.params.id, req.body);
    res.send(newProd);
})

module.exports = router;