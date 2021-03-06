const Team = require('../models/teamModel');
const User = require('../models/userModel');
const addNotification = require('../external/addNotification');

exports.getMembers = (req, res) => {
  Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
    if (err) {
      res.send(err);
    } else {
      res.json(foundTeam.members);
    }
  });
};

exports.postMember = async (req, res) => {
  const newMember = req.body;

  try {
    const team = await Team.findOneAndUpdate(
      { _id: req.params.teamId },
      { $push: { members: newMember } },
      { new: true }
    ).exec();

    const { tasks: newTasks } = team;
    await User.updateOne(
      { _id: newMember._id },
      {
        $push: {
          tasks: { $each: newTasks },
          teams: { _id: req.params.teamId, name: team.name },
        },
      }
    ).exec();

    if (String(newMember._id) !== String(req.user._id)) {
      addNotification({ teamName: team.name }, [newMember._id], 3);
    }

    res.send('Sucessfully added member');
  } catch (err) {
    res.send(err);
  }
};

exports.getMemberWithId = (req, res) => {
  Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
    if (err) {
      res.send(err);
    } else {
      res.json(
        foundTeam.members.find(
          (member) => String(member._id) === String(req.params.memberId)
        )
      );
    }
  });
};

exports.deleteMemberWithId = async (req, res) => {
  try {
    const team = await Team.findOneAndUpdate(
      { _id: req.params.teamId },
      { $pull: { members: { _id: req.params.memberId } } }
    ).exec();
    const { tasks } = team;
    const tasksId = tasks.map((task) => task._id);
    await User.updateOne(
      { _id: req.params.memberId },
      {
        $pull: { teams: { _id: req.params.teamId }, tasks: { _id: tasksId } },
      }
    ).exec();
    if (String(req.params.memberId) !== String(req.user._id)) {
      addNotification({ teamName: team.name }, [req.params.memberId], 6);
    }
    res.send('Sucessfully removed the member');
  } catch (err) {
    res.send(err);
  }
};

exports.changeMemberAdminStatus = async (req, res) => {
  try {
    const team = await Team.findOneAndUpdate(
      { _id: req.params.teamId, 'members._id': req.params.memberId },
      {
        $bit: { 'members.$.isAdmin': { xor: 1 } },
      }
    ).exec();

    if (String(req.params.memberId) !== String(req.user._id)) {
      addNotification({ teamName: team.name }, [req.params.memberId], 7);
    }

    res.send('Update member to admin sucessfully');
  } catch (err) {
    res.send(err);
  }
};
