const OrgProfile = require('../orgProfile/orgProfile.model').OrgProfile;
const QRCode = require('qrcode');

async function generateQRCode(name) {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(`${name}`, { errorCorrectionLevel: 'H' }, function (err, url) {
      resolve(url);
    })
  })
}

async function create(reqParam){
      generateQRCode(reqParam.industryId).then((url)=> {
      reqParam.qrCode = url;
      let newReq = new OrgProfile(reqParam);
      newReq.save();
      return OrgProfile.findOne({ _id: newReq._id });
}


async function getAll() {
    return await OrgProfile.find({});
}


async function getOne(_id) {
    return OrgProfile.findById(_id);
}

async function getByUserId(reqParam) {
    return OrgProfile.findOne({ userId: reqParam.userId });
}


async function update(id, reqParam) {
    reqParam.updatedAt = new Date();
    let getReq = await OrgProfile.findById(id);

    if (!getReq) throw 'getReq not Found';

    Object.assign(getReq, reqParam);
    await getReq.save();

    return OrgProfile.findById(id);

}


async function _delete(id) {
    await OrgProfile.deleteOne({_id: id});
}


module.exports = { create, getAll, getOne, getByUserId, update, delete: _delete, generateQRCode};
