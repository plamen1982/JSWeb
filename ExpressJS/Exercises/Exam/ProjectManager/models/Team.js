const mongoose = require('mongoose');

/* Team
    Name – string (required), unique
    Projects – a collection of Projects
    Members – a collection of Users
*/

const teamSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true, unique: true },
    projects: [{ type: mongoose.Schema.Types.ObjectId }],
    members: [{ type: mongoose.Schema.Types.ObjectId }],
});

module.exports = mongoose.model('Team', teamSchema);

//When creating a team you should also: push the projectId to projects, push memberId to members