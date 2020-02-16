const UserProfile = require('../userProfile/userProfile.model').UserProfile;


async function create(reqParam){
    let newReq = new UserProfile(reqParam);
    await newReq.save();

    return UserProfile.findOne({ _id: newReq._id });
}


async function getAll() {
    return await UserProfile.find({});
}


async function getOne(_id) {
    return UserProfile.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await UserProfile.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return UserProfile.findById(id);

}


async function _delete(id) {
    await UserProfile.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
