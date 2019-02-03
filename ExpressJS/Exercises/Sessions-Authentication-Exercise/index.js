const env = process.env.NODE_ENV || 'development';
const app = require('express')();
const config = require('./config/config')[env];

require('./config/database')(config);
require('./config/express')(app);
require('./config/routes')(app);
require('./config/passport')();

app.listen(config.port, () => {
    console.log(`The server is listening at port: ${config.port}`)
});