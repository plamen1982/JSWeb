const User = require("../models/User");
const Project = require("../models/Project");
const Team = require("../models/Team");

module.exports = {
  createProjectGet: (req, res) => {
    res.render("admin/createProject");
  },
  createProjectPost: (req, res) => {
    const { name, description } = req.body;
    const projectData = {
        name, 
        description,
    }
    Project.create(projectData)
      .then(() => {
        res.redirect("/");
      })
      .catch(console.error);
  },
  getAllProjects: (req, res) => {

Promise.all([Project.find(), Team.find()])
.then(([projects, teams]) => {
  let projectsWithoutTeam = projects.filter(project => {
    if (!project.team) {
      return project;
    }
  });
  const context  = {
      projects: projectsWithoutTeam,
      teams
  }

  res.render("admin/projectsAdmin", context);
})
.catch(console.error);
  },
  postAllProjects: (req, res) => {
    const { teamId, projectId } = req.body;
    Promise.all([Team.find({'_id':teamId}), Project.find({'_id':projectId})])
        .then(([team, project]) => {

            project[0].team = team[0]._id;
            team[0].projects.push(project[0]._id);

            return Promise.all([
                Team.findOneAndUpdate({'_id': teamId}, team[0]),
                Project.findByIdAndUpdate({'_id':  projectId}, project[0])])
                .then((team, project) => {
                    res.redirect('/')
                })
                .catch(console.error)
        }) 
        .catch(console.error);
  },
};
