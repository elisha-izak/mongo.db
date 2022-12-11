const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({name: 'moshe', aga: 2});
})

router.get('/:id', (req, res) => {
    res.send(req.params.id);
})

router.post('/', (req, res) => {

})




module.exports = router;