const express = require('express');
const router = express.Router();
const passport = require('passport');

const adminController = require('../controllers/admin');

router.get(
  '/assign-review',
  passport.checkAuthentication,
  passport.checkAdmin,
  adminController.assignReview
);

router.post(
  '/assign-review',
  passport.checkAuthentication,
  passport.checkAdmin,
  adminController.assignReviewAction
);

router.get(
  '/admin-view',
  passport.checkAuthentication,
  passport.checkAdmin,
  adminController.adminView
);

router.get(
  '/add-employee',
  passport.checkAuthentication,
  passport.checkAdmin,
  adminController.addEmployee
);

router.post(
  '/add-employee',
  passport.checkAuthentication,
  passport.checkAdmin,
  adminController.addEmployeeAction
);

router.get(
  '/delete/:id',
  passport.checkAuthentication,
  passport.checkAdmin,
  adminController.deleteEmployee
);

router.get(
  '/update/:id',
  passport.checkAuthentication,
  passport.checkAdmin,
  adminController.updateEmployee
);

router.post(
  '/update/:id',
  passport.checkAuthentication,
  passport.checkAdmin,
  adminController.updateEmployeeAction
);

router.post(
  '/make-admin',
  passport.checkAuthentication,
  passport.checkAdmin,
  adminController.makeAdmin
);

router.get('/signout', passport.checkAuthentication, adminController.signout);

module.exports = router;
