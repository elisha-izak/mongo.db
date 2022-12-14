const express = require('express');

const router = express.Router();
const useService = require('../BL/user.service')



// let user = {
//     fName: "shalom",
//     lName: "braha",
//     email: "slbr32@gmail.com",
//     password: "54540fgh",
//     dob: new Date(2000,13,11),
//     gender: "male",
//     permission: "viewer"
// }

router.get('/', (req, res) => {
    res.send({name: 'moshe', aga: 2});
})

router.get('/:id', (req, res) => {
    res.send(req.params.id);
})

router.post('/', async (req, res) => {
    console.log('fsdgg');
    await useService.createNewUser(req.body);
    res.send('ok');
})

router.post('/login', async (req, res) => {
    try{
    let result =  await useService.loginUser(req.body);
    res.send(result);
    }
    catch(err){
        res.status(401).send(err);
    }
})




module.exports = router;