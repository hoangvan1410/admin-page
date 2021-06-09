const mongoose = require('mongoose');

const HealthinfoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
    },
    createDate: {
        type: Date,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
});

const Healthinfo = mongoose.model('Healthinfo', HealthinfoSchema);

module.exports = { HealthinfoSchema, Healthinfo };