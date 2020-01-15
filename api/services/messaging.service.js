const Messaging = require("../messaging/messaging.model.js").Messaging;


async function create(messageParam){

    let msg = new Messaging(messageParam);

    await msg.save();

    return Messaging.findOne({ _id: msg._id });

}


async function getAll() {
    return await Messaging.find({});
}



async function getOne(_id) {
    return Messaging.findById(_id);
}


async function update(id, messageParam) {
    let msg = await Messaging.findById(id);


    if (!msg) throw 'msg not Found';


    Object.assign(msg, messageParam);

    await msg.save();

    return Messaging.findById(id);

}


async function _delete(id) {
    await Messaging.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
