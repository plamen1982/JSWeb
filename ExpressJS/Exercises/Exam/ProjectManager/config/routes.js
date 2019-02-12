const controllers = require('../controllers');
const restrictedPages = require('./auth');

module.exports = app => {
    //============================================== Home =================================================//
    app.get('/', controllers.home.index);
    // app.get('/search', controllers.home.search);

    //============================================== User =================================================//

    app.get('/register', restrictedPages.isAnonymous, controllers.user.registerGet);
    app.post('/register', restrictedPages.isAnonymous, controllers.user.registerPost);
    app.post('/logout', restrictedPages.isAuthed, controllers.user.logout);
    app.get('/login', restrictedPages.isAnonymous, controllers.user.loginGet);
    app.post('/login', restrictedPages.isAnonymous, controllers.user.loginPost);

    //============================================== Admin =================================================//
    app.get('/createTeam', restrictedPages.hasRole('Admin'), controllers.team.createTeamGet);
    app.post('/createTeam', restrictedPages.hasRole('Admin'), controllers.team.createTeamPost);
    app.get('/createProject', restrictedPages.hasRole('Admin'), controllers.project.createProjectGet);
    app.post('/createProject', restrictedPages.hasRole('Admin'), controllers.project.createProjectPost);
    app.get('/admin/teams', restrictedPages.hasRole('Admin'), controllers.team.getAllTeams);
    app.post('/admin/teams', restrictedPages.hasRole('Admin'), controllers.team.postAllTeams);
    app.get('/admin/projects', restrictedPages.hasRole('Admin'), controllers.project.getAllProjects);
    app.post('/admin/projects', restrictedPages.hasRole('Admin'), controllers.project.postAllProjects);

/*
Guest (not logged in) users can access Home page and functionality.
Guest (not logged in) users can access Login page and functionality.
Guest (not logged in) users can access Register page and functionality.
Users (logged in) can access Projects page and functionality.
Users (logged in) can access Teams page and functionality.
Users (logged in) can access the Profile functionality.
Users (logged in) can access Logout functionality.
Admins (logged in) can access Projects (but with a different view).
Admins (logged in) can access Teams (but with a different view).
Admins (logged in) can access Create Team page and functionality.
Admins (logged in) can access the Create Project page and functionality.
Admins (logged in) can access the Profile page and functionality.
Admins (logged in) can access the Logout page and functionality.
*/
    //============================================== Teams ====================================================//


    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};