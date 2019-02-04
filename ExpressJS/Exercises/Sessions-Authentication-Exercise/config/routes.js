const restrictedPages = require('./auth');
const homeController = require('../controllers/home');
const userController = require('../controllers/user');

module.exports = app => {

    //=============================== Home =====================================================//

    app.get('/', homeController.index);

    //=============================== About ====================================================//

    app.get('/about', homeController.about);

    //=============================== Register User=================================================//

    app.get('/user/register', userController.registerGet);
    app.post('/user/register', userController.registerPost);

    //=============================== Logout ===================================================//

    app.post('/logout');

    //=============================== Login ====================================================//

    app.get('/user/login', userController.loginGet);
    app.post('/user/login');

    //=============================== Add Car ==================================================//

    app.get('/cars/add');
    app.post('/cars/add');

    //=============================== All Cars =================================================//

    app.get('/cars/all');

    //=============================== Get User By Id ============================================//

    app.get('/users/:id');

    //=============================== Cars Rented By Id ==========================================//

    app.get('/cars/rent/:id');
    app.post('/cars/rent/:id');

    //=============================== Everything Else ============================================//

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};