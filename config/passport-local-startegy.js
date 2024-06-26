const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/userSchema');

<<<<<<< HEAD
const local = new LocalStrategy({ usernameField: "email" }, function (
=======
const local = new LocalStrategy({ usernameField: 'email' }, function (
>>>>>>> 725668c499843ee46298a09cfc0ed9e7c3251d3e
  email,
  password,
  done
) {
  User.findOne({ email }, function (error, user) {
    if (error) {
      console.log(`Error in finding user: ${error}`);
      return done(error);
    }

    if (!user || !user.isPasswordCorrect(password)) {
      console.log('Invalid Username/Password');
      return done(null, false);
    }
    return done(null, user);
  });
});

passport.use('local', local);

//serialize user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//deserialize user
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    if (err) {
<<<<<<< HEAD
      console.log("Error in finding user--> Passport");
=======
      console.log('Error in finding user--> Passport');
>>>>>>> 725668c499843ee46298a09cfc0ed9e7c3251d3e
      return done(err);
    }
    return done(null, user);
  });
});

// check if user is authenticated
passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('/users/signin');
};

// set authenticated user for views
passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};
