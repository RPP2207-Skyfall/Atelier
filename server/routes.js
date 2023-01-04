require("dotenv").config();
const router = require("express").Router();
const controller = require('./controllers/')

router.post('/reviews', controller.review.get_product_reviews)
router.post('/metadata', controller.review.get_metadata)
router.post('/addReview', controller.review.add_new_review)
router.put('/helpful', controller.review.mark_helpful)
router.put('/report', controller.review.report_review)
router.get('/relateItemsID', controller.relatedID.getRelatedItemsID)
router.get('/getRating', controller.rating.getRating)
router.get('/getImageAndPrice', controller.image.getImageAndPrice)
router.get('/getItemDetails', controller.itemDetails.getItemDetails)
router.post('/getProductQA', controller.questionAnswer.getProductQA)
router.post('/addNewAnswer', controller.questionAnswer.addNewAnswer)
router.post('/addNewQuestion', controller.questionAnswer.addNewQuestion)
router.put('/helpfulQuestion', controller.questionAnswer.helpfulQuestion)
router.put('/reportQuestion', controller.questionAnswer.reportQuestion)
router.put('/helpfulAnswer', controller.questionAnswer.helpfulAnswer)
router.put('/reportAnswer', controller.questionAnswer.reportAnswer)

router.post('/interactions', controller.tracker.post_interactions)


module.exports = router;