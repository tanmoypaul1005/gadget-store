import { products_type } from '@/app/api/utils/const';

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
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', productSchema);