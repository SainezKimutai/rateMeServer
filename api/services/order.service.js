const Order = require("../order/order.model.js").Order;


async function create(orderParam){

    let ord = new Order(orderParam);

    await ord.save();

    return Order.findOne({ _id: ord._id });

}


async function getAll() {
    return await Order.find({});
}



async function getOne(_id) {
    return Order.findById(_id);
}


async function update(id, orderParam) {
    let ord = await Order.findById(id);


    if (!ord) throw 'ord not Found';


    Object.assign(ord, orderParam);

    await ord.save();

    return Order.findById(id);

}


async function _delete(id) {
    await Order.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
