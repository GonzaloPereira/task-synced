const Team = require('../models/teamModel');
const User = require('../models/userModel');
const Task = require('../models/taskModel');
const addNotification = require('../external/addNotification');

exports.getTasks = (req, res) => {
  Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
    if (err) {
      res.send(err);
    } else {
      res.json(foundTeam.tasks);
    }
  });
};

exports.postTask = async (req, res) => {
  const { name, description, date } = req.body;
  const newTask = new Task({
    name: name,
    description: description,
    date: date,
  });

  try {
    const team = await Team.findOneAndUpdate(
      { _id: req.params.teamId },
      { $push: { tasks: newTask } },
      { new: true }
    ).exec();

    const { members } = team;
    const membersId = members.map((member) => member._id);

    await User.updateMany(
      { _id: membersId },
      { $push: { tasks: newTask } }
    ).exec();

    addNotification(
      { teamName: team.name, taskName: newTask.name },
      membersId.filter((member) => String(member._id) !== String(req.user._id)),
      1
    );

    res.send('Sucessfully added task');
  } catch (err) {
    res.send(err);
  }
};

exports.getTaskWithId = (req, res) => {
  Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
    if (err) {
      res.send(err);
    } else {
      res.json(
        foundTeam.tasks.find((task) => String(task._id) === req.params.taskId)
      );
    }
  });
};

exports.patchTask = async (req, res) => {
  try {
    const changes = req.body;
    const updateObj = {};
    Object.keys(changes).forEach((key) => {
      updateObj[`tasks.$.${key}`] = changes[key];
    });

    const team = await Team.findOneAndUpdate(
      { _id: req.params.teamId, 'tasks._id': req.params.taskId },
      { $set: updateObj }
    ).exec();

    const { members } = team;
    const membersId = members.filter((member) => member._id);

    await User.updateMany(
      { _id: membersId, 'tasks._id': req.params.taskId },
      { $set: updateObj }
    ).exec();

    res.send('Sucessfully updated the task');
  } catch (err) {
    res.send(err);
  }
};

exports.deleteTaskWithId = async (req, res) => {
  try {
    const team = await Team.findOneAndUpdate(
      { _id: req.params.teamId },
      { $pull: { tasks: { _id: req.params.taskId } } }
    ).exec();

    const { members, tasks } = team;
    const deletedTask = tasks.find(
      (task) => String(task._id) === req.params.taskId
    );
    const membersId = members.map((member) => member._id);

    await User.updateMany(
      { _id: membersId },
      {
        $pull: { tasks: { _id: req.params.taskId } },
      }
    ).exec();

    addNotification(
      { teamName: team.name, taskName: deletedTask.name },
      membersId.filter((member) => String(member._id) !== String(req.user._id)),
      2
    );

    res.send('Sucessfully deleted the task');
  } catch (err) {
    res.send(err);
  }
};
