const ErrorHander = require('../utils/errorhandler');
const catchasyncerrors = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require("../utils/sendEmail.js")


//register
exports.registerUser = catchasyncerrors(async(req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "This is sample id",
            url: "profilePicUrl",
        }
    });

    sendToken(user, 201, res);
});

//login

exports.loginUser = catchasyncerrors(async(req, res, next) => {
    const { email, password } = req.body;

    //checking password and email

    if (!email || !password) {
        return next(new ErrorHander("Please enter email and password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHander("Invalid email or password", 401));
    }

    const isPasswordMatched = user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHander("Invalid email or password", 401));
    }

    sendToken(user, 200, res);

})

//logout

exports.logout = catchasyncerrors(async(req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })


    res.status(200).json({
        success: true,
        message: "logged out"
    })
});

//Forgot password

// exports.forgotPassword = catchasyncerrors(async(req, res, next) => {
//     const user = await User.findOne({ email: req.body.email });

//     if (!user) {
//         return next(new ErrorHander("User not found", 404));
//     }
//     //Get reset password token

//     const resetToken = user.getResetPasswordToken();

//     await user.save({ validateBeforeSave: false });

//     const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

//     const message = `Your password reset token is :- \n \n ${resetPasswordUrl} \n\n if you have not requested this please ignore`;

//     try {
//         await sendEmail({
//             email: user.email,
//             subject: `Ecommerce password recovery`,
//             message,

//         });
//         res.status(200).json({
//             success: true,
//             message: `Email sent to ${user.email} succesfully`,
//         })

//     } catch (error) {
//         user.resetPasswordToken = undefined;
//         user.resetPasswordExpire = undefined;
//         await user.save({ validateBeforeSave: false });

//         return next(new ErrorHander(error.message, 500));

//     }


// });

//update user profile

exports.updateProfile = catchasyncerrors(async(req, res, next) => {

    const newuserData = {
        name: req.body.name,
        email: req.body.email,
    }

    //we will add cloudinary later

    const user = await User.findByIdAndUpdate(req.user.id, newuserData, {
        new: true,
        runValidators: true,
        userfindAndModify: false,
    });

    res.status(200).json({
        success: true
    })
});

exports.getUserdetails = catchasyncerrors(async(req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    })
})

//Get single users admin

exports.singleuser = catchasyncerrors(async(req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHander(`User doesnt exist with is ${req.params.id}`))
    }

    res.status(200).json({
        sucess: true,
        user
    });

})

//get all user
exports.getAlluser = catchasyncerrors(async(req, res, next) => {
    const users = await User.find();



    res.status(200).json({
        sucess: true,
        users
    });

});


//update role admin
exports.updaterole = catchasyncerrors(async(req, res, next) => {

    const newuserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    }



    const user = await User.findByIdAndUpdate(req.params.id, newuserData, {
        new: true,
        runValidators: true,
        userfindAndModify: false,
    });

    res.status(200).json({
        success: true
    })
});


//Delete user admin
exports.deleteuser = catchasyncerrors(async(req, res, next) => {


    const user = await User.findById(req.params.id)

    if (!user) {
        return next(new ErrorHander(`User doesnt exist with is ${req.params.id}`))
    }

    await user.remove();


    res.status(200).json({
        success: true,
        message: "User deleted succesfully"
    })
});