const User = require("../models/User");
const Project = require("../models/Project");
const Team = require("../models/Team");

module.exports = {
    //=================================== Admin ================//
  createTeamGet: (req, res) => {
    res.render("admin/createTeam");
  },
  createTeamPost: (req, res) => {
    const { name } = req.body;
    const bodyTeam = {
        name,
    }
    Team.create(bodyTeam)
      .then(() => {
        res.redirect("/");
      })
      .catch(console.error);
  },
  getAllTeams: (req, res) => {
    Promise.all([User.find(), Team.find()])
    .then(([users, teams]) => {

      const context  = {
          users,
          teams
      }
    
      res.render("admin/teamsAdmin", context);
    })
    .catch(console.error);
  },
  postAllTeams: (req, res) => {

  }

};

// Promise.all([ User.findById(adminId), ])
//     .then(([user, team]) => {
//         const teamId = team._id;
//         const userId = user._id;
//         user.teams.push(teamId);
//         team.members.push(userId);

//         return Promise.all([
//             User.findByIdAndUpdate(userId, user),
//             Team.findByIdAndUpdate(teamId, team)
//         ])
//         .catch(console.error)
//     })
//     .then(() => {
//         res.redirect('/');
//     })
//     .catch(() => {
//         res.redirect('/');
//     })
