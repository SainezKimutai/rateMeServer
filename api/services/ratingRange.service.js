const RatingRange = require('../ratingRange/ratingRange.model').RatingRange;


async function create(reqParam){
    let newReq = new RatingRange(reqParam);
    await newReq.save();

    return RatingRange.findOne({ _id: newReq._id });
}


async function getAll() {
    return await RatingRange.find({});
}


async function getOne(_id) {
    return RatingRange.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await RatingRange.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return RatingRange.findById(id);

}


async function _delete(id) {
    await RatingRange.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
