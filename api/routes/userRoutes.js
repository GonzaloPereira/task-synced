const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  User.find((err, foundUsers) => {
    if (err) {
      res.send(err);
    } else {
      res.json(foundUsers);
    }
  });
};

exports.postUser = (req, res) => {
  const { name, email, password, tasks } = req.body;
  const user = new User({
    name: name,
    email: email,
    password: password,
    tasks: tasks,
  });
  user.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Sucessfully created user');
    }
  });
};

exports.getUserWithId = (req, res) => {
  User.findOne({ _id: req.params.userId }, (err, foundUser) => {
    if (err) {
      res.send(err);
    } else {
      res.json(foundUser);
    }
  });
};

exports.patchUserWithId = (req, res) => {
  const changes = req.body;
  User.updateOne({ _id: req.params.userId }, { $set: changes }, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Sucessfully updated the user');
    }
  });
};

exports.deleteUserWithId = (req, res) => {
  User.deleteOne({ _id: req.params.userId }, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Sucessfully deleted the user');
    }
  });
};
