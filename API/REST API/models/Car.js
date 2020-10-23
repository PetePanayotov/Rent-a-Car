const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({

    type: {
        type: String,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true,

    },

    year: {
        type: String,
        required: true,
       
    },

    fuel: {
        type: String,
        required: true
    },

    seats : {
        type: String,
        required: true
    },

    img : {
        type: String,
        required: true
    },

    price : {
        type: String,
        required: true
    },

    count : {
        type: String,
        required: true
    },

    likes: [
        {
            type: 'ObjectId',
            required: true,
            ref: 'User'
        }
    ],

    // isVipOffer: {
    //     type: Boolean,
    //     required: true
    // },

    // specifications: {
    //     type: String,
    //     required: true
    // },

    // comments: [{
    //     type: String,
    //     required: true
    // }]
    
});

module.exports = mongoose.model('Car' , CarSchema);