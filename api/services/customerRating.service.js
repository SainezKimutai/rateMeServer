const CustomerRating = require('../customerRating/customerRating.model').CustomerRating;


async function create(reqParam){
    let newReq = new CustomerRating(reqParam);
    await newReq.save();

    return CustomerRating.findOne({ _id: newReq._id });
}


async function getAll() {
    return await CustomerRating.find({});
}


async function getOne(_id) {
    return CustomerRating.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await CustomerRating.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return CustomerRating.findById(id);

}


async function _delete(id) {
    await CustomerRating.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
