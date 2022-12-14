const express = require('express');
const router = express.Router();
const ordService = require('../BL/order.service')

router.get('/', async (req, res) => {
    const orders =  await ordService.getAllOrder()
    res.send(orders);
})

router.get('/use/:id', async (req, res) => {
    const ordUser =  await ordService.getOrdUser(req.params.id)
    res.send(ordUser);
})

router.post('/', async (req, res) => {
    await ordService.createOrder(req.body)
    res.send('ok');
})




module.exports = router;