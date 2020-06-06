const Interest = require('../interest/interest.model').Interest;


async function create(reqParam){
    let newReq = new Interest(reqParam);
    await newReq.save();

    return Interest.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Interest.find({});
}


async function getOne(_id) {
    return Interest.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Interest.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Interest.findById(id);

}


async function _delete(id) {
    await Interest.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
