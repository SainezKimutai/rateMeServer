const BuyersProfile = require("../buyersProfile/buyersProfile.model.js").BuyersProfile;


async function create(buyerParam){
    if (await BuyersProfile.findOne({ email: buyerParam.email })) {
        return;
    }

    let buyer = new BuyersProfile(buyerParam);

    await buyer.save();

    return BuyersProfile.findOne({ email: buyer.email });

}


async function getAll() {
    return await BuyersProfile.find({});
}



async function getOne(_id) {
    return BuyersProfile.findById(_id);
}


async function update(id, buyerParam) {
    let buyer = await BuyersProfile.findById(id);


    if (!buyer) throw 'buyer not Found';


    Object.assign(buyer, buyerParam);

    await buyer.save();

    return BuyersProfile.findById(id);

}


async function _delete(id) {
    await BuyersProfile.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
