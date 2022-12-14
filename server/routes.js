require("dotenv").config();
const router = require("express").Router();
const controller = require('./controllers/')

router.get('/review', controller.review.get_product_reviews)
router.get('/metadata', controller.review.get_metadata)



module.exports = router;