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
                    return;
                } 
                res.redirect('/');
            })
            
        } catch(error) {
            if(error.code === 11000) {
                res.locals.error = 'Username already exist';
                res.render('user/register', reqUser);
                return;
            }               

            res.locals.error = error;
            res.render('user/register', reqUser);
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
        const reqUser = req.body;
        const { username, password } = reqUser;
        try {
            const currentUser = await User.findOne({ username });
            if(!currentUser.authenticate(password)) {
               res.locals.error = 'Password does not matched.';
               res.render('user/login', reqUser);
               return;
            }
            req.logIn(currentUser, (error, currentUser) => {
                if(error) {
                    res.locals.error = 'Something when wrong';
                    res.render('user/login', currentUser);
                    return;
                } else {
                    res.redirect('/')
                }
            });
        } catch(error) {
            console.log(error);
            res.locals.error = 'Username does not matched.';
            res.render('user/login', reqUser);
        }
    }
};