const https = require('https');

const sendNotification = (targetIds, notificationContent) => {
  const data = {
    app_id: process.env.ONESIGNAL_API_ID,
    contents: { en: notificationContent },
    channel_for_external_user_ids: 'push',
    include_external_user_ids: targetIds,
  };

  const options = {
    host: 'onesignal.com',
    port: 443,
    path: '/api/v1/notifications',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Basic ${process.env.ONESIGNAL_REST_API_KEY}`,
    },
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      console.log('Response:');
      console.log(JSON.parse(d));
    });
  });

  req.on('error', (e) => {
    console.log('ERROR:');
    console.log(e);
  });

  req.write(JSON.stringify(data));
  req.end();
};
const Notification = require('../models/notificationModel');
const User = require('../models/userModel');

function notificationData(data, type) {
  switch (type) {
    case 1:
      return {
        name: `Your team "${data.teamName}"`,
        description: `has added a new task "${data.taskName}"`,
      };
    case 2:
      return {
        name: `Your team "${data.teamName}"`,
        description: `has completed a task "${data.taskName}"`,
      };
    case 3:
      return {
        name: `You have been added to the team`,
        description: `"${data.teamName}"`,
      };
    case 4:
      return {
        name: `Your team "${data.teamName}"`,
        description: `has edited the task "${data.taskName}"`,
      };
    case 5:
      return {
        name: `Your team "${data.teamName}"`,
        description: 'has changed its information',
      };
    case 6:
      return {
        name: `You have been removed from the team`,
        description: `"${data.teamName}"`,
      };
    case 7:
      return {
        name: `Your admin status has change for the team`,
        description: `"${data.teamName}"`,
      };
    default:
      return {
        name: `You have a new notification`,
        description: '',
      };
  }
}
function notifiticationMessage(teamName, type) {
  switch (type) {
    case 1:
      return `A new task has been added to your team "${teamName}"`;
    case 2:
      return `Your team "${teamName}" has completed a task`;
    case 3:
      return `You have been added to the team "${teamName}"`;
    case 4:
      return `Your team "${teamName}" has edited a task`;
    case 5:
      return `Your team "${teamName}" has changed its information`;
    case 6:
      return `You have been removed from the team "${teamName}"`;
    case 7:
      return `Your admin status has change for the team "${teamName}"`;
    default:
      return 'You have a new notification';
  }
}
module.exports = async (data, membersId, type) => {
  const {
    name: notificationName,
    description: notificationDescription,
  } = notificationData(data, type);

  const newNotification = new Notification({
    name: notificationName,
    description: notificationDescription,
    date: new Date(),
    type: type,
  });

  await User.updateOne(
    { _id: membersId },
    { $push: { notifications: newNotification } }
  ).exec();

  sendNotification(membersId, notifiticationMessage(data.teamName, type));
};
