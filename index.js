const express = require('express');                                 //importing the server
const port = process.env.PORT || 8000;                              //specifying the port on which server will run
const app = express();                                              //launching the server
const session = require('express-session');                         //importing for session storage of an user
const dotenv = require('dotenv');                                   //config env 
dotenv.config({ path: 'config/.env' });
const passport = require('passport');                              //importing passport middleware for node.js
const passportLocal = require('./config/passport');       
const db = require('./config/mogoose');                            //importing the ODM Mongoose



app.set('view engine', 'ejs');                                     //setting up the view engine EJS
app.set('views', './views');                                       //linking views folder with server
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false,cookie: {maxAge: 1000 * 60 * 100,},}));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/', require('./routes'));



app.listen(port, function (error) {                                //checking for error if any
  if (error) {
    console.log('Error In Running The Server');
    return;
  }
  console.log('Cool! Server Is Running On Port:', port);
});