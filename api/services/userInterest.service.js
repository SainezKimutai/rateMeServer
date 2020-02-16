const UserInterest = require('../userInterest/userInterest.model').UserInterest;


async function create(reqParam){
    let newReq = new UserInterest(reqParam);
    await newReq.save();

    return UserInterest.findOne({ _id: newReq._id });
}


async function getAll() {
    return await UserInterest.find({});
}


async function getOne(_id) {
    return UserInterest.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await UserInterest.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return UserInterest.findById(id);

}


async function _delete(id) {
    await UserInterest.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
