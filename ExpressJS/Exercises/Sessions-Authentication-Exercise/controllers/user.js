const User = require('../models/User');
const encryption = require('../util/encryption');

module.exports = {
    registerGet: (req, res) => {
        res.render('user/register');
    },
    registerPost: async (req, res) => {
        const reqUser = req.body;
        const { username, password, repeatPassword, firstName, lastName} = reqUser;
        const salt = encryption.generateSalt();
        if(password !== repeatPassword) {
            res.locals.error = 'Password does not matched.'
            res.render('user/register', reqUser);
        }
        const hashedPass = encryption.generateHashedPassword(salt, password);
        try {
            const user = await User.create({
                username,
                hashedPass,
                salt,
                firstName,
                lastName,
                roles: ['user'],
            });
            req.logIn(user, (error, user) => {
                if(error) {
                    res.locals.error = error;
                    res.render('user/register', user);
                } else {
                    res.redirect('/');
                }
            })
            
        } catch(error) {
            if(error.code === 11000) {
                res.locals.error = 'Username already exist';
                res.render('user/register', reqUser);
            } else {
                res.locals.error = error;
                res.render('user/register', reqUser);
            }
        }
    },
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    loginGet: (req, res) => {
        res.render('user/login');
    },
    loginPost: async (req, res) => {
        // TODO:
    }
};