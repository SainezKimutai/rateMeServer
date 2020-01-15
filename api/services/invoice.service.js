const Invoice = require("../invoice/invoice.model.js").Invoice;


async function create(invoiceParam){

    let inv = new Invoice(invoiceParam);

    await inv.save();

    return Invoice.findOne({ _id: inv._id });

}


async function getAll() {
    return await Invoice.find({});
}



async function getOne(_id) {
    return Invoice.findById(_id);
}


async function update(id, invoiceParam) {
    let inv = await Invoice.findById(id);


    if (!inv) throw 'inv not Found';


    Object.assign(inv, invoiceParam);

    await inv.save();

    return Invoice.findById(id);

}


async function _delete(id) {
    await Invoice.deleteOne({_id: id});
}

module.exports = { create, getAll, getOne, update, delete: _delete };
