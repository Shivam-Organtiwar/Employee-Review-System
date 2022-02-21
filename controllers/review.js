const Review = require('../models/review');
const User = require('../models/employee');

module.exports.createReview = async function (req, res) {
  const { id } = req.params;
  const { review } = req.body;
  try {
    const toUser = await User.findById(id);
    const fromUser = req.user;
    const rev = review;

    await Review.create({
      review: rev,
      from: fromUser,
      to: toUser,
    });

    const idx = req.user.myEvaluations.indexOf(id);
    req.user.myEvaluations.splice(idx, 1);
    req.user.save();

    console.log('Review Submitted Successfully');
    return res.redirect('back');
  } catch (error) {
    console.log(`Error in creating review: ${error}`);
    res.redirect('back');
  }
};
