const Template = require('../template/template.model').Template;


async function create(reqParam){
    let newReq = new Template(reqParam);
    await newReq.save();

    return Template.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Template.find({});
}


async function getOne(_id) {
    return Template.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Template.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Template.findById(id);

}


async function _delete(id) {
    await Template.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
