const mongoose = require('mongoose');
const encryption = require('../util/encryption');
const { Schema } = mongoose;
const { Types: { ObjectId, String } } = Schema;
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    hashedPass: { type: String, required: true },
    salt: { type: String, required: true },
    roles: [{ type: String }],
    edits: [{ type: ObjectId, ref: 'Edit' }]
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
    try {
        let users = await User.find();
        if (users.length > 0) return;
        const salt = encryption.generateSalt();
        const hashedPass = encryption.generateHashedPassword(salt, 'Admin');
        return User.create({
            email: 'Admin',
            salt,
            hashedPass,
            roles: ['Admin']
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = User;
