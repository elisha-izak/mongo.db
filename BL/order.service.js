const orderController = require('../DL/CONTROLLER/order.controller');
const userController = require('../DL/CONTROLLER/user.controller');
const productController = require("../DL/CONTROLLER/product.controller");


async function getAllOrderPop() {
    try {
        const orders = await orderController.read({});
       
        console.log(orders[0].products);

    }
    catch (e) {
        console.log(e.message);
    }
}
async function getAllOrder() {
    try {
        const orders = await orderController.read({});
        let userId = orders[0].userId
        let user= await userController.read({ _id: userId })
        let productId = await productController.read({_id: orders[0].products[0].product})
        console.log(user[0].email);
        console.log(productId[0].price);

    }
    catch (e) {
        console.log(e.message);
    }
}

async function init(order) {
    try {
        const res = await orderController.create(order);
        console.log(res);

    }
    catch (e) {
        console.log(e.message);
    }
}
const getNewOrderId = () => 3982498



let order = {
    id: getNewOrderId(),
    userId: '63907461f33b55d076e41fcf',
    products: [
        {
            product: '63906cb12b04e51d98e7a022',
            quantity: 5,
            finalPrice: 1500
        }, {
            product: '63906d9fbd4d7db50d1c7f5a',
            quantity: 1,
            finalPrice: 3
        }],
    totalPrice: 1513,
}
// getAllOrderPop()
getAllOrder()


// init(order)
module.exports = {init}