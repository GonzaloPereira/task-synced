const User = require('../models/userModel');

exports.deleteNotificationWithId = (req, res) => {
  User.updateOne(
    { _id: req.params.userId },
    { $pull: { notifications: { _id: req.params.notificationId } } },
    (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('Sucessfully deleted the notification');
      }
    }
  );
};
