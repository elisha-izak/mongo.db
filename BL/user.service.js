const userDL = require('../DL/CONTROLLER/user.controller')
const orderDl = require('../DL/CONTROLLER/order.controller');
const productDl = require("../DL/CONTROLLER/product.controller");
const bcrypt = require('bcrypt');
const { create } = require('../DL/MODEL/user.model');
const auth = require('../auth');

async function createNewUser(data) {
    if(!data.email || !data.password) throw "missing data"

    let useMail = await userDL.readOne({email : data.email});
    if(useMail) throw "user is exist"
    let usePass = await userDL.readOne({password : data.password});
    if(usePass) throw "user is exist"

    let res = await userDL.create(data);
    console.log(res)
    return res;
}


async function loginUser(data) {



    let user = await userDL.readOne({email : data.email,
                                     password : data.password});
                                     
    if(!user) throw "user is NOT exist"
    console.log(user);
    let token = auth.createToken(data.email)
    
    return token;
}



// let user = {
//     fName: "yosi",
//     lName: "klear",
//     email: "yokl20@gmail.com",
//     password: "dfs09896mkm",
//     dob: new Date(1995,23, 2),
//     gender: "male",
//     permission: "viewer"
// }

// createNewUser(user);


module.exports = {createNewUser, loginUser}