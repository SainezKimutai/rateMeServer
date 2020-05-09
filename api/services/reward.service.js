const Reward = require('../reward/reward.model').Reward;


async function create(reqParam){
    let newReq = new Reward(reqParam);
    await newReq.save();

    return Reward.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Reward.find({});
}


async function getOne(_id) {
    return Reward.findById(_id);
}


async function update(id, reqParam) {
    let getReq = await Reward.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Reward.findById(id);

}


async function _delete(id) {
    await Reward.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
