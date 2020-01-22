const Delivery = require("../delivery/delivery.model.js").Delivery;


async function create(deliveryParam){

    let dlv = new Delivery(deliveryParam);

    await dlv.save();

    return Delivery.findOne({ _id: dlv._id });

}


async function getAll() {
    return await Delivery.find({});
}



async function getOne(_id) {
    return Delivery.findById(_id);
}


async function update(id, deliveryParam) {
    let dlv = await Delivery.findById(id);


    if (!dlv) throw 'dlv not Found';


    Object.assign(dlv, deliveryParam);

    await dlv.save();

    return Delivery.findById(id);

}


async function _delete(id) {
    await Delivery.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
