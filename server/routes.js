require("dotenv").config();
const router = require("express").Router();
const controller = require('./controllers/')

// review widget
router.post('/reviews', controller.review.get_product_reviews)
router.post('/metadata', controller.review.get_metadata)
router.post('/addReview', controller.review.add_new_review)
router.put('/helpful', controller.review.mark_helpful)
router.put('/report', controller.review.report_review)

// related product widget
router.get('/relatedMetaData', controller.itemDetails.getRelatedMetaData)
router.get('/outfitMetaData', controller.itemDetails.getOutfitMetaData)

// O&A
router.post('/getProductQA', controller.questionAnswer.getProductQA)
router.post('/addNewAnswer', controller.questionAnswer.addNewAnswer)
router.post('/addNewQuestion', controller.questionAnswer.addNewQuestion)
router.put('/helpfulQuestion', controller.questionAnswer.helpfulQuestion)
router.put('/reportQuestion', controller.questionAnswer.reportQuestion)
router.put('/helpfulAnswer', controller.questionAnswer.helpfulAnswer)
router.put('/reportAnswer', controller.questionAnswer.reportAnswer)

// tracker
router.post('/interactions', controller.tracker.post_interactions)


module.exports = router;