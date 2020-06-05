const express = require('express');
 exports.register = (app) => {
    app.use('/api/users', require('./api/users'));
    app.use('/api/orgProfile', require('./api/orgProfile'));
    app.use('/api/industry', require('./api/industry'));

    app.use('/api/orgBranch', require('./api/orgBranch'));
    app.use('/api/customerProfile', require('./api/customerProfile'));
    app.use('/api/interest', require('./api/interest'));
    app.use('/api/possibleSolution', require('./api/possibleSolution'));
    app.use('/api/question', require('./api/question'));
    app.use('/api/response', require('./api/response'));
    app.use('/api/template', require('./api/template'));
    app.use('/api/customerInterest', require('./api/customerInterest'));
    app.use('/api/customerRating', require('./api/customerRating'));
    app.use('/api/ratingRange', require('./api/ratingRange'));
    app.use('/api/ratingPoints', require('./api/ratingPoints'));
    app.use('/api/reward', require('./api/reward'));
    app.use('/api/emoji', require('./api/emoji'));
    app.use('/api/stats', require('./api/stats'));

    app.use('/api/fileUpload', require('./api/fileUpload'));
    app.use('/static', express.static('./public'));
};
