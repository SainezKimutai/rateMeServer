const CustomerProfile = require('../customerProfile/customerProfile.model').CustomerProfile;


async function create(reqParam){
    let newReq = new CustomerProfile(reqParam);
    await newReq.save();

    return CustomerProfile.findOne({ _id: newReq._id });
}


async function getAll() {
    return await CustomerProfile.find({});
}


async function getOne(_id) {
    return CustomerProfile.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await CustomerProfile.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return CustomerProfile.findById(id);

}


async function _delete(id) {
    await CustomerProfile.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
