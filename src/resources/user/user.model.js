import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    companyName: {
        type: String
    },
    companyID: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true });

UserSchema.pre('save', function(next) {
    if( !this.isModified('password')) {
        return next();
    }
    bcrypt.hash( this.password, 8, (err, hash) => {
        if( err ) {
            return next(err);
        }
        this.password = hash;
        next();
    });
})

export const User = mongoose.model('user', UserSchema);