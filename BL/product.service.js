const productDl = require('../DL/CONTROLLER/product.controller')
const orderDl = require('../DL/CONTROLLER/order.controller');
const userDL = require('../DL/CONTROLLER/user.controller');



// async function init() {
//     try {
//         const { status, newProduct } = await createNewProduct(product);
//         console.log(status, newProduct);

//         // const { updateStatus, updatedProduct } = await updateProduct(product.id, {inStock: 5});
//         // console.log(updateStatus, updatedProduct);
//     }
//     catch(e) {
//         console.log(e.message);
//     }
// }



async function createNewProduct(productData) {

    const exists = await productDl.read({id: productData.id});
    if (exists) throw new Error("Product id already exists");

    const newProduct = await productDl.create(productData);
    return newProduct;
}



async function updateProduct(productId, newData) {

    const exists = await productDl.read({_id: productId});
    if (!exists) throw new Error("Invalid search ID");

    await productDl.updateMany({_id: productId}, newData);
    const updatedProduct = await productDl.read({_id: productId});
    return updatedProduct;
}







async function getAllProducts() {
    const products = await productDl.read({})
    return products;
}

async function getProd(filter) {
    const products = await productDl.read(filter)
    return products;
}





// let product = {
//     id: 4,
//     title: "hummus",
//     price: 6,
//     description: "delishes",
//     category: {title: "food"},
//     image: "https://www.supergood.co.il/wp-content/uploads/2018/06/DSCN7632.jpg",
//     inStock: 40
// }

// init();

module.exports = {createNewProduct, updateProduct, getAllProducts, getProd}