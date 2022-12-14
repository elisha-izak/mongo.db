const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


function createToken(data){
console.log(data);
    const jjj =  jwt.sign({data},SECRET,{expiresIn: '2d'})
    console.log(jjj);
    return jjj;
}


module.exports = {createToken}