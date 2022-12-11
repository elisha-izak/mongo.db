const userDL = require('../DL/CONTROLLER/user.controller')
const orderController = require('../DL/CONTROLLER/order.controller');
const productController = require("../DL/CONTROLLER/product.controller");




async function createNewUser(data) {
    if(!data.email || !data.password) throw "missing data"

    let user = await userDL.readOne({email : data.email});
    if(user) throw "user is exist"

    let res = await userDL.create(data);
    console.log(res)
    return res;
}



let user = {
    fName: "yosi",
    lName: "klear",
    email: "yokl20@gmail.com",
    password: "dfs09896mkm",
    dob: new Date(1995,23, 2),
    gender: "male",
    permission: "viewer"
}

// createNewUser(user);


module.exports = {createNewUser}