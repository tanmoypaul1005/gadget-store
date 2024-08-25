import { products_type } from '@/util/const';

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
    brand: {
        type: String,
        required: true
    },
    ratting:{
        type: Number,
        required: true,
        default:2
    },
    type: {
        type: String,
        required: true,
        enum: products_type,
        default: 'regular'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    offer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Offer"
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
}, { timestamps: true });


export default mongoose?.models?.Product || mongoose?.model('Product', productSchema);