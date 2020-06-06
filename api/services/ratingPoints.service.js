const RatingPoints = require('../ratingPoints/ratingPoints.model').RatingPoints;


async function create(reqParam){
    let newReq = new RatingPoints(reqParam);
    await newReq.save();

    return RatingPoints.findOne({ _id: newReq._id });
}


async function getAll() {
    return await RatingPoints.find({});
}


async function getOne(_id) {
    return RatingPoints.findById(_id);
}


async function getOneByUserProfileId(id) {
    return RatingPoints.findOne({ userProfileId: id });
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await RatingPoints.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return RatingPoints.findById(id);

}


async function _delete(id) {
    await RatingPoints.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, getOneByUserProfileId, delete: _delete };
