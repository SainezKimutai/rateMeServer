const OrgProfile = require('../orgProfile/orgProfile.model').OrgProfile;


async function create(reqParam){
    let newReq = new OrgProfile(reqParam);
    await newReq.save();

    return OrgProfile.findOne({ _id: newReq._id });
}


async function getAll() {
    return await OrgProfile.find({});
}


async function getOne(_id) {
    return OrgProfile.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await OrgProfile.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return OrgProfile.findById(id);

}


async function _delete(id) {
    await OrgProfile.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
