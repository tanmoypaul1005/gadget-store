const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    shipping_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true,
    },

    billing_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true,
    },

    total_amount: {
        type: Number,
        required: true
    },

    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: { type: Number, default: 1 },
        }
    ],

    order_status: {
        type: String,
        enum: ["ordered", "packed", "shipped", "delivered"],
        default: "ordered",
    }

}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);