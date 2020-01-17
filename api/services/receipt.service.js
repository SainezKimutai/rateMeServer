const Receipt = require("../receipt/receipt.model.js").Receipt;


async function create(receiptParam){

    let qot = new Receipt(receiptParam);

    await qot.save();

    return Receipt.findOne({ _id: qot._id });

}


async function getAll() {
    return await Receipt.find({});
}



async function getOne(_id) {
    return Receipt.findById(_id);
}


async function update(id, receiptParam) {
    let qot = await Receipt.findById(id);


    if (!qot) throw 'qot not Found';


    Object.assign(qot, receiptParam);

    await qot.save();

    return Receipt.findById(id);

}


async function _delete(id) {
    await Receipt.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
