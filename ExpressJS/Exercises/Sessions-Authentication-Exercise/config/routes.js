const restrictedPages = require('./auth');
const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const carController = require('../controllers/car');
module.exports = app => {

    //=============================== Home =====================================================//

    app.get('/', homeController.index);

    //=============================== About ====================================================//

    app.get('/about', homeController.about);

    //=============================== Register User=============================================//

    app.get('/user/register', restrictedPages.isAnonymous, userController.registerGet);
    app.post('/user/register', restrictedPages.isAnonymous, userController.registerPost);

    //=============================== Logout ===================================================//

    app.post('/user/logout', userController.logout);

    //=============================== Login ====================================================//

    app.get('/user/login', restrictedPages.isAnonymous, userController.loginGet);
    app.post('/user/login', restrictedPages.isAnonymous, userController.loginPost);

    //=============================== Get User By Id ===========================================//

    app.get('/users/:id');

    //=============================== Add Car ==================================================//

    app.get('/cars/add', restrictedPages.hasRole('admin'), carController.addGet);
    app.post('/cars/add', restrictedPages.hasRole('admin'), carController.addPost);

    //=============================== All Cars =================================================//

    app.get('/cars/all', carController.allCars);

    //=============================== Cars Rented By Id ========================================//

    app.get('/cars/rent/:id', restrictedPages.isAuthed, carController.rent);

    //=============================== Cars Edited By Id ========================================//

    app.get('/cars/edit/:id', restrictedPages.hasRole('admin'), carController.editGet);
    app.post('/cars/edit/:id', restrictedPages.hasRole('admin'), carController.editPost);

    //=============================== Everything Else ==========================================//

    app.all('*', (req, res) => {
        res.status(404);
        res.send('The route does not exist, please check');
        res.end();
    });
};