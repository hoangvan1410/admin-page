const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    isActive: {
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

const Account = mongoose.model('Account', AccountSchema);

module.exports = { AccountSchema, Account };
