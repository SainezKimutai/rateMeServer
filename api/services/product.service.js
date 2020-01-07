const Product = require("../product/product.model.js").Product;


async function create(productParam){
  console.log(productParam);
    if (await Product.findOne({ name: productParam.name, productsMembershipNumber: productParam.productsMembershipNumber})) {
        return;
    }

    let product = new Product(productParam);

    console.log(product);
    await product.save();

    return Product.findOne({ name: productParam.name, productsMembershipNumber: productParam.productsMembershipNumber});

}


async function getAll() {
    return await Product.find({});
}



async function getOne(_id) {
    return Product.findById(_id);
}


async function update(id, productParam) {
    let product = await Product.findById(id);


    if (!product) throw 'product not Found';


    Object.assign(product, productParam);

    await product.save();

    return Product.findById(id);

}


async function _delete(id) {
    await Product.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
