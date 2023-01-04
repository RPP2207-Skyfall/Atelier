require("dotenv").config();
const router = require("express").Router();
const controller = require('./controllers/')
// router.route('/getItemDetails')
//   .get(controller.itemDetails.getItemDetails)

router.post('/reviews', controller.review.get_product_reviews)
router.post('/metadata', controller.review.get_metadata)
router.post('/addReview', controller.review.add_new_review)
router.put('/helpful', controller.review.mark_helpful)
router.put('/report', controller.review.report_review)
// router.get('/relateItemsID', controller.relatedID.getRelatedItemsID)
router.get('/getRating', controller.rating.getRating)
// router.get('/getImageAndPrice', controller.image.getImageAndPrice)
// router.get('/getItemDetails', controller.itemDetails.getItemDetails)
router.get('/relatedMetaData', controller.itemDetails.getRelatedMetaData)
router.get('/outfitMetaData', controller.itemDetails.getOutfitMetaData)

router.post('/interactions', controller.tracker.post_interactions)


module.exports = router;