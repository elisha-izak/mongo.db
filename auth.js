const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


function createToken(data){

    const token =  jwt.sign({data},SECRET,{expiresIn: '2d'})
    console.log(token);
    return token;
}


function validToken(req, res, next) {
    try{
    data = req.headers.authorization.replace('bearer ','')

    const token = jwt.verify(data,SECRET)
    req.token = token;
    console.log(token);
    next()
    }
    catch(e){
        res.status(403).send('token not valid')
    } 
}


module.exports = {createToken, validToken}