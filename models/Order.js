const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    orderedBy: { type: String, required: true },

    address: {
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
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
            payable_price: {
                type: Number,
                required: true,
            },
            purchasedQty: {
                type: Number,
                required: true,
            },
        },
    ],

    payment_status: {
        type: String,
        enum: ["pending", "completed", "cancelled", "refund"],
        required: true,
    },

    payment_type: {
        type: String,
        enum: ["cash", "card", "upi"],
        required: true,
    },

    order_status: {
        type: String,
        enum: ["ordered", "packed", "shipped", "delivered"],
        default: "ordered",
    }

}, { timestamps: true });

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);