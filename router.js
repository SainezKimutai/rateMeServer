const express = require('express');
 exports.register = (app) => {
    app.use('/api/user', require('./api/users'));
    app.use('/api/sellersProfile', require('./api/sellersProfile'));
    app.use('/api/buyersProfile', require('./api/buyersProfile'));
    app.use('/api/product', require('./api/product'));
    app.use('/api/fileUpload', require('./api/fileUpload'));
    app.use('/static', express.static('./public'));
};
