const User = require('../models/employee');
const Review = require('../models/review');

module.exports.signUp = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('back');
  }
  return res.render('signup');
};

module.exports.signIn = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect('back');
  }
  return res.render('signin');
};

module.exports.createEmployee = async function (req, res) {
  const { name, email, password, confirmPassword } = req.body;
  try {
    if (password != confirmPassword) {
      return res.redirect('back');
    }
    const employee = await User.findOne({ email });

    if (employee) {
      console.log('email already exists');
      return res.redirect('back');
    }
    const newEmployee = await User.create({
      name,
      email,
      password,
      isAdmin: false,
    });
    await newEmployee.save();
    if (!newEmployee) {
      console.log(`Error in creating employee`);
      return res.redirect('back');
    }
    return res.redirect('/employee/signin');
  } catch (error) {
    console.log(`Error in creating Employee: ${error}`);
    res.redirect('back');
  }
};

module.exports.createSession = function (req, res) {
  console.log(`Session created successfully`);
  return res.redirect('/');
};

module.exports.signout = function (req, res) {
  req.logout();
  return res.redirect('/employee/signin');
};
