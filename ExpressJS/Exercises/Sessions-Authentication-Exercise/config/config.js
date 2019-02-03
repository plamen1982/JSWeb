module.exports = {
    development: {
        port: process.env.PORT || 3100,
        dbPath: 'mongodb://localhost:27017/car-rental-db'
    },
    production: {}
};