const express = require("express");
const { registerUser, loginUser, logout, getUserdetails, updateProfile, getAlluser, singleuser, updaterole, deleteuser } = require("../controller/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// router.route("/password/forgot").post(forgotPassword);
router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserdetails);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), getAlluser);

router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), singleuser)
    .put(isAuthenticatedUser, authorizeRoles('admin'), updaterole).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteuser)

module.exports = router;