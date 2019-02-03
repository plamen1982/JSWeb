const mongoose = require('mongoose');
const { Schema } = mongoose;
const encryption = require('../util/encryption');

const userSchema = new Schema({
    username: String,
    hashedPass: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    salt: { type: String, required: true },
    roles: [{ type: String }]
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);
// TODO: Create an admin at initialization here
module.exports = User;
