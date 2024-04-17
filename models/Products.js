const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['new_arrivals', 'trending', 'top_rated', 'regular', 'popular'],
        default: 'regular'
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Category"
     },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
},{timestamps:true});

export default mongoose.models.Product || mongoose.model('Product', productSchema);