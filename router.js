const express = require('express');
 exports.register = (app) => {
    app.use('/api/user', require('./api/users'));
    app.use('/api/sellersProfile', require('./api/sellersProfile'));
    app.use('/static', express.static('./public'))
};
