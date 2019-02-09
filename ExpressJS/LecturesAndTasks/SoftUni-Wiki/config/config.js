module.exports = {
    development: {
        port: process.env.PORT || 3200,
        dbPath: 'mongodb://localhost:27017/softuni-wiki-db'
    },
    production: {}
};