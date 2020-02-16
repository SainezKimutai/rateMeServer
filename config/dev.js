let config = {

    mongo: {
        // url: process.env.MONGO_DB_URI || 'mongodb://localhost:27017/erp'
        url: 'mongodb://localhost/rateMeDatabase'
    },

    // Secret Key
    Secret: 'Rate-Me'

};

module.exports = config;
