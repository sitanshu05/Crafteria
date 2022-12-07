const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, createReview, getAllReview, deleteReview } = require("../controller/productControllers");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route('/products').get(getAllProducts); //get request

//new product
router.route('/admin/product/new').post(createProduct); //post request

//update product or delete product use put request to update and delete request to delete and get request to get details of single product
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
router.route('/product/:id').get(isAuthenticatedUser, getProductDetails);

router.route('/review').put(isAuthenticatedUser, createReview);

router.route('/reviews').get(getAllReview).delete(isAuthenticatedUser, deleteReview);



module.exports = router;