const Team = require('../models/teamModel');

exports.getTeams = (req, res) => {
  Team.find((err, foundTeams) => {
    if (err) {
      res.send(err);
    } else {
      res.json(foundTeams);
    }
  });
};

exports.postTeam = async (req, res) => {
  const { name, description, members, tasks } = req.body;
  const team = new Team({
    name: name,
    description: description,
    members: members,
    tasks: tasks,
  });
  res.send(await team.save());
};

exports.getTeamWithId = (req, res) => {
  Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
    if (err) {
      res.send(err);
    } else {
      res.json(foundTeam);
    }
  });
};

exports.getTeamNameWithId = (req, res) => {
  Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
    if (err) {
      res.send('');
    } else {
      res.json(foundTeam ? foundTeam.name : '');
    }
  });
};

const User = require('../models/userModel');
const addNotification = require('../external/addNotification');

exports.editTeamWithId = async (req, res) => {
  const changes = req.body;
  try {
    const team = await Team.findOneAndUpdate(
      { _id: req.params.teamId },
      { $set: changes },
      {
        new: true,
      }
    ).exec();

    const { members } = team;
    const membersId = members.map((member) => member._id);

    await User.updateMany(
      { _id: membersId, 'teams._id': req.params.teamId },
      { $set: { 'teams.$.name': team.name } }
    ).exec();

    addNotification(
      { teamName: team.name },
      membersId.filter((member) => String(member._id) !== String(req.user._id)),
      5
    );

    res.send('Sucessfully edited Team');
  } catch (err) {
    res.send(err);
  }
};

exports.deleteTeamWithId = async (req, res) => {
  try {
    const deletedTeam = await Team.findOneAndDelete({
      _id: req.params.teamId,
    }).exec();

    const { members, tasks } = deletedTeam;
    const membersId = members.map((member) => member._id);

    await User.updateMany(
      { _id: membersId },
      {
        $pull: {
          tasks: { $in: tasks },
          teams: { _id: deletedTeam._id, name: deletedTeam.name },
        },
      }
    ).exec();

    res.send('Sucessfully deleted team');
  } catch (err) {
    res.send(err);
  }
};
