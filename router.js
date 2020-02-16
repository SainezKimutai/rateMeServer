const express = require('express');
 exports.register = (app) => {
    app.use('/api/users', require('./api/users'));
    app.use('/api/orgProfile', require('./api/orgProfile'));
    app.use('/api/industry', require('./api/industry'));

    app.use('/api/orgBranch', require('./api/orgBranch'));
    app.use('/api/userProfile', require('./api/userProfile'));
    app.use('/api/interest', require('./api/interest'));
    app.use('/api/possibleSolution', require('./api/possibleSolution'));
    app.use('/api/question', require('./api/question'));
    app.use('/api/response', require('./api/response'));
    app.use('/api/template', require('./api/template'));
    app.use('/api/userInterest', require('./api/userInterest'));
    app.use('/api/userRating', require('./api/userRating'));
    app.use('/api/ratingRange', require('./api/ratingRange'));

    app.use('/api/fileUpload', require('./api/fileUpload'));
    app.use('/static', express.static('./public'));
};
