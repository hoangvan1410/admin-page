const mongoose = require('mongoose');

const RateSchema = new mongoose.Schema({
    grapValues:{
        type: Array,
    },
    heartRateNumber: {
        type: Number,
        required: true,
    },
    label: {
        type: String,
    },
    createDate: {
        type: Date,
    },
    userId: {
        type: String,
        required: true,
    },
    isSubmitted: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
});

const Rate = mongoose.model('Rate', RateSchema);

module.exports = { RateSchema, Rate };
