const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems:[
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity:{type:Number,default:1},
        }
    ]
},{timestamps:true});

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema);