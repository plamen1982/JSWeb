const mongoose = require('mongoose');
/* Project
    Name – string (required), unique
    Description – string (required), max length of 50 symbols
    Team – a single Team
*/

const projectSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true, unique: true },
    description: { type: mongoose.Schema.Types.String },
    team: { type: mongoose.Schema.Types.ObjectId },
});

module.exports = mongoose.model('Project', projectSchema);

//When creating a Project you should also:add to team the teamId 
//When creating a team you should also: push the projectId to projects, push memberId to members
