const orderDl = require('../DL/CONTROLLER/order.controller');
const userDL = require('../DL/CONTROLLER/user.controller');
const productDl = require("../DL/CONTROLLER/product.controller");


async function getAllOrder() {
    try {
        const orders = await orderDl.read({});
       
        console.log(orders);
        return orders;
    }
    catch (e) {
        console.log(e.message);
    }
}

async function getOrdUser(userId) {
    try {
        const orders = await orderDl.read({userId: userId});
        console.log(orders);
        return orders;
        
    }
    catch (e) {
        console.log(e.message);
    }
}



async function createOrder(order) {
    try {
        const res = await orderDl.create(order);
        console.log(res);
        return res;
    }
    catch (e) {
        console.log(e.message);
    }
}
// const getNewOrderId = () => 3982498



// let order = {
    // id: getNewOrderId(),
    // userId: '63907461f33b55d076e41fcf',
    // products: [
    //     {
    //         product: '63906cb12b04e51d98e7a022',
    //         quantity: 5,
    //         finalPrice: 1500
    //     }, {
    //         product: '63906d9fbd4d7db50d1c7f5a',
    //         quantity: 1,
    //         finalPrice: 3
    //     }],
    // totalPrice: 1513,
// }
// getAllOrderPop()
// getAllOrder()


// init(order)
module.exports = {createOrder, getAllOrder, getOrdUser}