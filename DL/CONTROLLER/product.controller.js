const productData = require('../MODEL/product.model'); 
const { update } = require('./user.controller');


// const product = {
//     id: 99,
//     title: 'avatiach',
//     price: 432,
//     category: 'food',
//     image: 'sadggdsga',
//     inStock: 2,
//     }


async function create(data) {
    return await productData.create(data);
}
 
async function read(filter) {
    return await productData.find(filter);
}

async function updateMany(ProductId, newData) {
    return await productData.updateMany(ProductId, newData);
}
 
async function del(ProductId) {
    return update(ProductId, {isActive : false});
}




module.exports = {del, updateMany, read, create}