const Product = require('../models/productModel');
const ErrorHander = require('../utils/errorhandler')
const catchasyncerrors = require('../middleware/catchAsyncErrors');
const ApiFeatures = require('../utils/apifeatures');



//create Product --Admin
exports.createProduct = catchasyncerrors(async(req, res, next) => {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);

    res.status(201).json({
        sucess: true,
        product
    })
});


//Get all products --user and admin

exports.getAllProducts = catchasyncerrors(async(req, res) => {



    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter().pagination(resultPerPage);

    const products = await apiFeature.query;
    res.status(201).json({
        sucess: true,
        products,

    })

});

//update product--Admin

exports.updateProduct = catchasyncerrors(async(req, res, next) => {
    let product = Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        succes: true,
        product
    })
});

//delete Product

exports.deleteProduct = catchasyncerrors(async(req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404))
    }

    await product.remove();

    res.status(200).json({
        succes: true,
        message: "Product deleted"
    })

});

//get single product
exports.getProductDetails = catchasyncerrors(async(req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHander("Product not found", 404))
    }

    res.status(200).json({
        succes: true,
        product,

    })

});

//Create new review

exports.createReview = catchasyncerrors(async(req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findById(productId);

    const isReviewed = product.reviews.find((rev) => rev.user.toString() === req.user._id.toString());

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating),
                (rev.Comment = comment)


        })

    } else {
        product.reviews.push(review);
        product.numofReviews = product.reviews.length
    }

    let avg = 0;
    product.reviews.forEach(rev => {
        avg += rev.rating;
    });
    product.ratings = avg / product.reviews.length;



    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    })
});

//get all reviews

exports.getAllReview = catchasyncerrors(async(req, res, next) => {
    const product = await Product.findById(req.query.id);
    if (!product) {
        return next(new ErrorHander("Product not found", 404))
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
});

//export delete reviews check once not working  
exports.deleteReview = catchasyncerrors(async(req, res, next) => {
    const product = await Product.findById(req.query.productId);
    if (!product) {
        return next(new ErrorHander("Product not found", 404))
    }

    const review = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id.toString());

    let avg = 0;
    review.forEach((rev) => {
        avg += rev.rating;
    });
    const rating = avg / review.length;

    const numreview = review.length;

    await Product.findByIdAndUpdate(
        req.query.productId, {
            review,
            rating,
            numreview,
        },

        {
            new: true,
            runValidators: true,
            userFindAndModify: false,
        }

    );





    res.status(200).json({
        success: true,
    });
});