const PossibleSolution = require('../possibleSolution/possibleSolution.model').PossibleSolution;


async function create(reqParam){
    let newReq = new PossibleSolution(reqParam);
    await newReq.save();

    return PossibleSolution.findOne({ _id: newReq._id });
}


async function getAll() {
    return await PossibleSolution.find({});
}


async function getOne(_id) {
    return PossibleSolution.findById(_id);
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await PossibleSolution.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return PossibleSolution.findById(id);

}


async function _delete(id) {
    await PossibleSolution.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
