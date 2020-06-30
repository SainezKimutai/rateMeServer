const Response = require('../response/response.model').Response;


async function create(reqParam){
    let newReq = new Response(reqParam);
    await newReq.save();

    return Response.findOne({ _id: newReq._id });
}


async function getAll() {
    return await Response.find({});
}

async function getAllByQuestionId(id) {
    return await Response.find({questionId: id});
}

async function getOne(_id) {
    return Response.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await Response.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return Response.findById(id);

}


async function _delete(id) {
    await Response.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete, getAllByQuestionId};
