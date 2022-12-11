const productData = require('../MODEL/product.model') 


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
 
async function read(filter, specificField) {
    return await productData.find(filter, specificField);
}

async function updateMany(ProductId, newData) {
    return await productData.updateMany(ProductId, newData);
}
 
async function del(ProductId) {
    return update(ProductId, {isActive : false});
}

module.exports = {del, updateMany, read, create}