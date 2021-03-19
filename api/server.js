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

const app = express();

const port = 3080;

// place holder for the data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: 'Secret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

const url = 'mongodb://localhost:27017/TaskSyncedDB';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

// Schemas and Models

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
});
const Task = mongoose.model('Task', taskSchema);

const teamSchema = new mongoose.Schema({
  name: String,
  members: [{ id: String, name: String }],
  tasks: [taskSchema],
});
const Team = mongoose.model('Team', teamSchema);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  tasks: [taskSchema],
  teams: [{ id: String, name: String }],
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

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/secrets',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      User.findOrCreate({ googleId: profile.id }, (err, user) => cb(err, user));
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/secrets',
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({ facebookId: profile.id }, (err, user) =>
        cb(err, user)
      );
    }
  )
);
// Inserting an example team
// const myTeam = new Team({
//   name: 'Los snickers',
//   members: [
//     { id: 1, name: 'gonzalote' },
//     { id: 2, name: 'El vinces' },
//   ],
//   tasks: [
//     {
//       name: 'first task',
//       description: 'La descripcion mas unica que te inventes',
//       date: new Date(),
//     },
//   ],
// });
// myTeam.save();

app
  .route('/teams')
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
  .post((req, res) => {
    const { name, members, tasks } = req.body;
    const team = new Team({
      name: name,
      members: members,
      tasks: tasks,
    });
    team.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('New team created');
      }
    });
  });

app
  .route('/teams/:teamId')
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

app
  .route('/teams/:teamId/tasks')
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
      const membersId = members.map((member) => member.id);
      await User.updateMany(
        { _id: membersId },
        { $push: { tasks: newTask } }
      ).exec();
      res.send('Sucessfully added task');
    } catch (err) {
      res.send(err);
    }
  });

app
  .route('/teams/:teamId/tasks/:taskId')
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
      const { members } = team;
      const membersId = members.map((member) => member.id);
      await User.updateMany(
        { _id: membersId },
        { $pull: { tasks: { _id: req.params.taskId } } }
      ).exec();
      res.send('Sucessfully deleted the task');
    } catch (err) {
      res.send(err);
    }
  });

app
  .route('/teams/:teamId/members')
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
    const { id, name } = req.body;
    const newMember = {
      id: id,
      name: name,
    };
    try {
      const team = await Team.findOneAndUpdate(
        { _id: req.params.teamId },
        { $push: { members: newMember } },
        { new: true }
      ).exec();
      const { tasks: newTasks, name: teamName } = team;
      await User.updateOne(
        { _id: id },
        {
          $push: {
            tasks: { $each: newTasks },
            teams: { id: req.params.teamId, name: teamName },
          },
        }
      ).exec();
      res.send('Sucessfully added member');
    } catch (err) {
      res.send(err);
    }
  });

app
  .route('/teams/:teamId/members/:memberId')
  .get((req, res) => {
    Team.findOne({ _id: req.params.teamId }, (err, foundTeam) => {
      if (err) {
        res.send(err);
      } else {
        res.json(
          foundTeam.members.find(
            (member) => String(member.id) === req.params.memberId
          )
        );
      }
    });
  })
  .delete(async (req, res) => {
    try {
      const team = await Team.findOneAndUpdate(
        { _id: req.params.teamId },
        { $pull: { members: { id: req.params.memberId } } }
      ).exec();
      const { tasks } = team;
      const tasksId = tasks.map((task) => task.id);
      await User.updateOne(
        { _id: req.params.memberId },
        { $pull: { teams: { id: req.params.teamId }, tasks: { _id: tasksId } } }
      ).exec();
      res.send('Sucessfully removed the member');
    } catch (err) {
      res.send(err);
    }
  });

app
  .route('/users')
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
  .route('/users/:userId')
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
  .route('/users/:userId/tasks')
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
  .route('/users/:userId/tasks/:taskId')
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

app.get('/', (req, res) => {
  res.send('App Works !!!!');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
