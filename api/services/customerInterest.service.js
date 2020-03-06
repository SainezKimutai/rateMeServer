const CustomerInterest = require('../customerInterest/customerInterest.model').CustomerInterest;


async function create(reqParam){
    let newReq = new CustomerInterest(reqParam);
    await newReq.save();

    return CustomerInterest.findOne({ _id: newReq._id });
}


async function getAll() {
    return await CustomerInterest.find({});
}


async function getOne(_id) {
    return CustomerInterest.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await CustomerInterest.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return CustomerInterest.findById(id);

}


async function _delete(id) {
    await CustomerInterest.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
