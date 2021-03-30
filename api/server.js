// jshint esversion:6
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const findOrCreate = require('mongoose-find-or-create');
const path = require('path');
const https = require('https');
const { send } = require('process');

const app = express();

// place holder for the data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(
  session({
    secret: 'Secret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// const url = 'mongodb://localhost:27017/TaskSyncedDB';
const url = process.env.MONGODB_CONNECTION_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

// Schemas and Models

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
});
const Task = mongoose.model('Task', taskSchema);

const notificationSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  type: Number,
});
const Notification = mongoose.model('Notification', notificationSchema);

const teamSchema = new mongoose.Schema({
  name: String,
  description: String,
  members: [{ name: String, isAdmin: Number }],
  tasks: [taskSchema],
});
const Team = mongoose.model('Team', teamSchema);

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  tasks: [taskSchema],
  teams: [{ name: String }],
  notifications: [notificationSchema],
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
// Authentication code
app.get('/api/isAuthenticated', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.send('{}');
  }
});

app.get('/api/logout', (req, res) => {
  req.logout();
  res.send('Sucessfully logout');
});

app.post('/api/register', (req, res, next) => {
  User.register(
    { username: req.body.username, name: req.body.name },
    req.body.password,
    (err) => {
      if (err) {
        next(err);
      } else {
        passport.authenticate('local')(req, res, () => {
          res.send('Sucessfully registered user');
        });
      }
    }
  );
});

app.post('/api/login', (req, res, next) => {
  const user = new User({
    username: req.body.email,
    password: req.body.password,
  });
  req.login(user, (err) => {
    if (err) {
      next(err);
    } else {
      passport.authenticate('local')(req, res, () => {
        res.send('Succesfully logged user');
      });
    }
  });
});

app
  .route('/api/teams')
  // Return all teams
  .get((req, res) => {
    Team.find((err, foundTeams) => {
      if (err) {
        res.send(err);
      } else {
        res.json(foundTeams);
      }
    });
  })
  // Creates a team
  .post(async (req, res) => {
    const { name, description, members, tasks } = req.body;
    const team = new Team({
      name: name,
      description: description,
      members: members,
      tasks: tasks,
    });
    res.send(await team.save());
  });

app
  .route('/api/teams/:teamId')
  // Return a team
  .get((req, res) => {
    Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
      if (err) {
        res.send(err);
      } else {
        res.json(foundTeam);
      }
    });
  })
  // Deletes a team
  .delete((req, res) => {
    Team.deleteOne({ _id: req.params.teamId }, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('Succesfully deteled the team');
      }
    });
  });
const sendNotifications = (targetIds, notificationContent) => {
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

app
  .route('/api/teams/:teamId/tasks')
  // Returns all tasks of a team
  .get((req, res) => {
    Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
      if (err) {
        res.send(err);
      } else {
        res.json(foundTeam.tasks);
      }
    });
  })
  // Creates a new task for a team (and synchronizes it with users)
  .post(async (req, res) => {
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
  });

app
  .route('/api/teams/:teamId/tasks/:taskId')
  .get((req, res) => {
    Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
      if (err) {
        res.send(err);
      } else {
        res.json(
          foundTeam.tasks.find((task) => String(task._id) === req.params.taskId)
        );
      }
    });
  })
  .delete(async (req, res) => {
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
  });

app
  .route('/api/teams/:teamId/members')
  .get((req, res) => {
    Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
      if (err) {
        res.send(err);
      } else {
        res.json(foundTeam.members);
      }
    });
  })
  .post(async (req, res) => {
    const newMember = req.body;

    try {
      const team = await Team.findOneAndUpdate(
        { _id: req.params.teamId },
        { $push: { members: newMember } },
        { new: true }
      ).exec();

      const { tasks: newTasks, name: teamName } = team;
      const newNotification = new Notification({
        name: `You have been added to the team`,
        description: `"${teamName}"`,
        date: new Date(),
        type: 3,
      });
      await User.updateOne(
        { _id: newMember._id },
        {
          $push: {
            tasks: { $each: newTasks },
            teams: { _id: req.params.teamId, name: teamName },
            notifications: newNotification,
          },
        }
      ).exec();

      sendNotifications(
        [newMember._id],
        `You have been added to the team "${teamName}"`
      );

      res.send('Sucessfully added member');
    } catch (err) {
      res.send(err);
    }
  });

app
  .route('/api/teams/:teamId/members/:memberId')
  .get((req, res) => {
    Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
      if (err) {
        res.send(err);
      } else {
        res.json(
          foundTeam.members.find(
            (member) => String(member._id) === req.params.memberId
          )
        );
      }
    });
  })
  .delete(async (req, res) => {
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
      res.send('Sucessfully removed the member');
    } catch (err) {
      res.send(err);
    }
  });
app
  .route('/api/teams/:teamId/members/:memberId/admin')
  .patch(async (req, res, next) => {
    try {
      await Team.updateOne(
        { _id: req.params.teamId, 'members._id': req.params.memberId },
        {
          $bit: { 'members.$.isAdmin': { xor: 1 } },
        }
      ).exec();
      res.send('Update member to admin sucessfully');
    } catch (err) {
      next(err);
    }
  });

app
  .route('/api/users')
  // Returns all users
  .get((req, res) => {
    User.find((err, foundUsers) => {
      if (err) {
        res.send(err);
      } else {
        res.json(foundUsers);
      }
    });
  })
  // Creates a new user
  .post((req, res) => {
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
  });

app
  .route('/api/users/:userId')
  // Returns user
  .get((req, res) => {
    User.findOne({ _id: req.params.userId }, (err, foundUser) => {
      if (err) {
        res.send(err);
      } else {
        res.json(foundUser);
      }
    });
  })
  // Edits user
  .patch((req, res) => {
    const changes = req.body;
    User.updateOne({ _id: req.params.userId }, { $set: changes }, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('Sucessfully updated the user');
      }
    });
  })
  // Deletes user
  .delete((req, res) => {
    User.deleteOne({ _id: req.params.userId }, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('Sucessfully deleted the user');
      }
    });
  });

app
  .route('/api/users/:userId/tasks')
  .get((req, res) => {
    User.findOne({ _id: req.params.userId }, (err, foundUser) => {
      if (err) {
        res.send(err);
      } else {
        res.json(foundUser.tasks);
      }
    });
  })
  .post((req, res) => {
    const { name, description, date } = req.body;
    const newTask = new Task({
      name: name,
      description: description,
      date: date,
    });
    User.updateOne(
      { _id: req.params.userId },
      { $push: { tasks: newTask } },
      (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send('Sucessfully added new task for this user');
        }
      }
    );
  });
app
  .route('/api/users/:userId/tasks/:taskId')
  .get((req, res) => {
    User.findOne({ _id: req.params.userId }, (err, foundUser) => {
      if (err) {
        res.send(err);
      } else {
        res.json(
          foundUser.tasks.find((task) => String(task._id) === req.params.taskId)
        );
      }
    });
  })
  .delete((req, res) => {
    User.updateOne(
      { _id: req.params.userId },
      { $pull: { tasks: { _id: req.params.taskId } } },
      (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send('Sucessfully deleted the task');
        }
      }
    );
  });

app
  .route('/api/users/:userId/notifications/:notificationId')
  .delete((req, res) => {
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
  });

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3080, () => {
  console.log(`Server running`);
});
