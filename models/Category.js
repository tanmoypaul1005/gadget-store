const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

export default mongoose.models.Category || mongoose.model('Category', categorySchema);