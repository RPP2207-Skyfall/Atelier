require("dotenv").config();
const router = require("express").Router();
const controller = require('./controllers/')
// router.route('/getItemDetails')
//   .get(controller.itemDetails.getItemDetails)

// router.get('/review', controller.review.get_product_reviews)
// router.get('/metadata', controller.review.get_metadata)
router.get('/relateItemsID', controller.relatedID.getRelatedItemsID)
router.get('/getRating', controller.rating.getRating)
router.get('/getFirstImage', controller.image.getFirstImage)
router.get('/getItemDetails', controller.itemDetails.getItemDetails)



module.exports = router;