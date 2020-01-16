const Quotation = require("../quotation/quotation.model.js").Quotation;


async function create(quotationParam){

    let qot = new Quotation(quotationParam);

    await qot.save();

    return Quotation.findOne({ _id: qot._id });

}


async function getAll() {
    return await Quotation.find({});
}



async function getOne(_id) {
    return Quotation.findById(_id);
}


async function update(id, quotationParam) {
    let qot = await Quotation.findById(id);


    if (!qot) throw 'qot not Found';


    Object.assign(qot, quotationParam);

    await qot.save();

    return Quotation.findById(id);

}


async function _delete(id) {
    await Quotation.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
