const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const Destination = require('../models/destination');
const Review = require('../models/review');
const reviews = require('../controllers/reviews');
const ExpressError = require('../utils/ExpressError');
const catchAsync = require('../utils/catchAsync');

router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview))
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))
router.get('/:reviewId/edit', isLoggedIn, isReviewAuthor, catchAsync(reviews.renderEditReview))
router.put('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.updateReview));

module.exports = router;