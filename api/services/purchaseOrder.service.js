const PurchaseOrder = require("../purchaseOrder/purchaseOrder.model.js").PurchaseOrder;


async function create(purchaseOrderParam){

    let po = new PurchaseOrder(purchaseOrderParam);

    await po.save();

    return PurchaseOrder.findOne({ _id: po._id });

}


async function getAll() {
    return await PurchaseOrder.find({});
}



async function getOne(_id) {
    return PurchaseOrder.findById(_id);
}


async function update(id, purchaseOrderParam) {
    let po = await PurchaseOrder.findById(id);


    if (!po) throw 'po not Found';


    Object.assign(po, purchaseOrderParam);

    await po.save();

    return PurchaseOrder.findById(id);

}


async function _delete(id) {
    await PurchaseOrder.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
