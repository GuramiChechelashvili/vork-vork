import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true,
    },
    lastPrice: {
        type: Number,
        required: true
    },
    sales: {
        type: Number,
        required: true
    },
}, { timestamps: true });

// ProductSchema.pre('save', function(next) {
//     if( !this.isModified('password')) {
//         return next();
//     }
// })

export const Product = mongoose.model('product', ProductSchema);