const UserRating = require('../userRating/userRating.model').UserRating;


async function create(reqParam){
    let newReq = new UserRating(reqParam);
    await newReq.save();

    return UserRating.findOne({ _id: newReq._id });
}


async function getAll() {
    return await UserRating.find({});
}


async function getOne(_id) {
    return UserRating.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await UserRating.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return UserRating.findById(id);

}


async function _delete(id) {
    await UserRating.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
