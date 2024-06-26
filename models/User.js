const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        required: true,
        default: 'user',
    },

    image: { type: String },

    address: {
        type: String,
    },
    gender: {
        type: String,
    },
    phone: {
        type: String,
    }

}, { timestamps: true });

export default mongoose?.models?.User || mongoose.model('User', userSchema);