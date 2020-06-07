const Emoji = require('../emoji/emoji.model').Emoji;


async function create(reqParam){
    let newReq = new Emoji(reqParam);
    await newReq.save();

    return Emoji.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Emoji.find({});
}

async function getAllByRangeId(id) {
    return await Emoji.find({rangeId: id});
}


async function getOne(_id) {
    return Emoji.findById(_id);
}

async function getOneByName(nameParam) {
    return Emoji.findOne({ emojiName: nameParam });
}

async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Emoji.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Emoji.findById(id);

}


async function _delete(id) {
    await Emoji.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, getAllByRangeId, getOneByName, delete: _delete };
