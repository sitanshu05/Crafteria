const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pease Enter Product Name"],
        trim: true
    },
    description: {

        type: String,
        required: [true, "Pease Enter Description "]
    },
    price: {
        type: Number,
        required: [true, "Pease Enter Price "],
        maxLength: [8, "Price cannot exceed 8 characters"]

    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [{
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }

    ],
    category: {
        type: String,
        required: [true, "Please Enter Product category"],


    },
    Stock: {
        type: Number,
        required: [true, "Please Enter stock"],
        maxLength: [4, "Cant exceed 4 characters"],
        default: 1
    },
    numofReviews: {
        type: Number,
        default: 0
    },
    reviews: [{

        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true

        },
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        Comment: {
            type: String,
            required: true
        }
    }],

    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Product", productSchema);