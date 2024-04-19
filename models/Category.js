const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
    },
    image: {
        type: String
    }
},{timestamps:true});

export default mongoose.models.Category || mongoose.model('Category', categorySchema);