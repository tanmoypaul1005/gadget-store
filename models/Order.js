const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },

    // guest order fields
    guest_name: { type: String },
    guest_email: { type: String },
    guest_phone: { type: String },
    guest_address: { type: String },

    shipping_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: false,
    },

    billing_address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: false,
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