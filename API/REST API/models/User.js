const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true,

    },

    email: {
        type: String,
        unique: true,
        required: true,

    },

    phone: {
        type: String,
        unique: true,
        required: true,

    },

    password: {
        type: String,
        required: true,
       
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    likedCars: [
        {
            type: 'ObjectId',
            ref: 'Car'
        }
    ]

});

module.exports = mongoose.model('User' , UserSchema);
