const RFQ = require("../rfq/rfq.model.js").RFQ;


async function create(rfqParam){

    let rfqqq = new RFQ(rfqParam);

    await rfqqq.save();

    return RFQ.findOne({ _id: rfqqq._id });

}


async function getAll() {
    return await RFQ.find({});
}



async function getOne(_id) {
    return RFQ.findById(_id);
}


async function update(id, rfqParam) {
    let rfqqq = await RFQ.findById(id);


    if (!rfqqq) throw 'rfqqq not Found';


    Object.assign(rfqqq, rfqParam);

    await rfqqq.save();

    return RFQ.findById(id);

}


async function _delete(id) {
    await RFQ.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
