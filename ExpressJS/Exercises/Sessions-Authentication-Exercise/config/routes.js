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

    app.get('/car/add', restrictedPages.isAuthed, carController.addGet);
    app.post('/car/add', restrictedPages.isAuthed, carController.addPost);

    //=============================== All Cars =================================================//

    app.get('/car/all', carController.allCars);

    //=============================== Cars Rented By Id ========================================//

    app.get('/car/rent/:id', restrictedPages.isAuthed, carController.rentGet);
    app.post('/car/rent/:id', restrictedPages.isAuthed, carController.rentPost);

    //=============================== Cars Edited By Id ========================================//

    app.get('/car/edit/:id', restrictedPages.hasRole('admin'), carController.editGet);
    app.post('/car/edit/:id', restrictedPages.hasRole('admin'), carController.editPost);

    //=============================== Everything Else ==========================================//

    app.all('*', (req, res) => {
        res.status(404);
        res.send('The route does not exist, please check');
        res.end();
    });
};