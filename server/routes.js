require("dotenv").config();
const router = require("express").Router();
const controller = require('./controllers/')
// router.route('/getItemDetails')
//   .get(controller.itemDetails.getItemDetails)

router.post('/reviews', controller.review.get_product_reviews)
router.post('/metadata', controller.review.get_metadata)
router.post('/addReview', controller.review.add_new_review)
router.put('/helpful', controller.review.get_product_reviews)
router.put('/report', controller.review.get_metadata)
router.get('/relateItemsID', controller.relatedID.getRelatedItemsID)
router.get('/getRating', controller.rating.getRating)
router.get('/getFirstImage', controller.image.getFirstImage)
router.get('/getItemDetails', controller.itemDetails.getItemDetails)



module.exports = router;