const OrgBranch = require('../orgBranch/orgBranch.model').OrgBranch;


async function create(reqParam){
    let newReq = new OrgBranch(reqParam);
    await newReq.save();

    return OrgBranch.findOne({ _id: newReq._id });
}


async function getAll() {
    return await OrgBranch.find({});
}


async function getOne(_id) {
    return OrgBranch.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await OrgBranch.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return OrgBranch.findById(id);

}


async function _delete(id) {
    await OrgBranch.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
