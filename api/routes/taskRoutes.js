const Team = require('../models/teamModel');
const User = require('../models/userModel');
const Notification = require('../models/notificationModel');
const Task = require('../models/taskModel');
const sendNotifications = require('../external/notification');

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
    const newNotification = new Notification({
      name: `Your team "${team.name}"`,
      description: `has added a new task "${newTask.name}"`,
      date: new Date(),
      type: 1,
    });

    await User.updateMany(
      { _id: membersId },
      { $push: { tasks: newTask, notifications: newNotification } }
    ).exec();

    sendNotifications(
      membersId,
      `A new task has been added to your team "${team.name}"`
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

exports.deleteTaskWithId = async (req, res) => {
  try {
    const team = await Team.findOneAndUpdate(
      { _id: req.params.teamId },
      { $pull: { tasks: { _id: req.params.taskId } } }
    ).exec();

    const { members, tasks } = team;
    const { name: taskName } = tasks.find(
      (task) => String(task._id) === req.params.taskId
    );
    const membersId = members.map((member) => member._id);
    const newNotification = new Notification({
      name: `Your team "${team.name}"`,
      description: `has completed a task "${taskName}"`,
      date: new Date(),
      type: 2,
    });

    await User.updateMany(
      { _id: membersId },
      {
        $pull: { tasks: { _id: req.params.taskId } },
        $push: { notifications: newNotification },
      }
    ).exec();

    sendNotifications(
      membersId,
      `Your team "${team.name}" has completed a task`
    );

    res.send('Sucessfully deleted the task');
  } catch (err) {
    res.send(err);
  }
};
