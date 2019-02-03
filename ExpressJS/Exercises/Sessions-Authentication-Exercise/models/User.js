const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const encryption = require('../util/encryption');

const userSchema = new Schema({
    username: { type: String },
    hashedPass: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    salt: { type: String, required: true },
    roles: [{ type: String }],
    isAdmin: { type: Boolean, default: false },
    cars: [{ type: ObjectId, ref: 'Car' }],
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
    try {
        const users = await User.find({});
        //if there are existing users do not seed anything
        if(users.length > 0) {
            return;
        }
        const salt = encryption.generateSalt();
        const hashedPass = encryption.generateHashedPassword(salt, 'admin');
        return User.create({
            username: 'admin',
            salt,
            hashedPass,
            roles: ['admin']
        })
    } 
    catch(error) {
        console.log(error);
    }
}

module.exports = User;
