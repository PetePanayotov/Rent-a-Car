const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({

    brand: {
        type: String,
        required: true
    },

    model: {
        type: String,
        required: true,

    },

    price: {
        type: String,
        required: true,
       
    },

    imageUrl: {
        type: String,
        required: true
    },

    description : {
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

    isVipOffer: {
        type: Boolean,
        required: true
    },

    specifications: {
        type: String,
        required: true
    },

    comments: [{
        type: String,
        required: true
    }]
    
});

module.exports = mongoose.model('Car' , CarSchema);