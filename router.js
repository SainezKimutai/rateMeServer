const express = require('express');
 exports.register = (app) => {
    app.use('/api/user', require('./api/users'));
    app.use('/api/sellersProfile', require('./api/sellersProfile'));
    app.use('/api/buyersProfile', require('./api/buyersProfile'));
    app.use('/api/product', require('./api/product'));
    app.use('/api/messaging', require('./api/messaging'));
    app.use('/api/invoice', require('./api/invoice'));
    app.use('/api/quotation', require('./api/quotation'));
    app.use('/api/rfq', require('./api/rfq'));
    app.use('/api/receipt', require('./api/receipt'));
    app.use('/api/purchaseOrder', require('./api/purchaseOrder'));
    app.use('/api/order', require('./api/order'));
    app.use('/api/delivery', require('./api/delivery'));
    app.use('/api/fileUpload', require('./api/fileUpload'));
    app.use('/static', express.static('./public'));
};
