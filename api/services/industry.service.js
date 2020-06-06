const Industry = require('../industry/industry.model').Industry;


async function create(reqParam){
    let newReq = new Industry(reqParam);
    await newReq.save();

    return Industry.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Industry.find({});
}


async function getOne(_id) {
    return Industry.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Industry.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Industry.findById(id);

}


async function _delete(id) {
    await Industry.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
