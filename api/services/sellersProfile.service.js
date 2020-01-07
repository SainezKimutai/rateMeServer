const SellersProfile = require("../sellersProfile/sellersProfile.model.js").SellersProfile;


async function create(sellerParam){
    if (await SellersProfile.findOne({ email: sellerParam.email })) {
        return;
    }

    let seller = new SellersProfile(sellerParam);

    await seller.save();

    return SellersProfile.findOne({ email: seller.email });

}


async function getAll() {
    return await SellersProfile.find({});
}



async function getOne(_id) {
    return SellersProfile.findById(_id);
}


async function update(id, sellerParam) {
    let seller = await SellersProfile.findById(id);


    if (!seller) throw 'seller not Found';


    Object.assign(seller, sellerParam);

    await seller.save();

    return SellersProfile.findById(id);

}


async function _delete(id) {
    await SellersProfile.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
