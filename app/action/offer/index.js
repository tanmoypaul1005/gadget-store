import Offer from "@/models/Offer";
import Products from "@/models/Products";
import connectMongo from "@/util/db";
import mongoose from "mongoose";

export async function getOffer() {
    try {
        await connectMongo();
        const offer = await Offer.find({});
        return offer;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function getOfferProduct(offer_id) {
    try {
        await connectMongo();

        // Convert the offer_id to a Mongoose ObjectId
        const objectId = new mongoose.Types.ObjectId(offer_id);

        // Query the products where the offer matches the ObjectId
        const offer = await Products.find({ offer: objectId });

        console.log("offer", offer);
        console.log("offer_id", offer_id);

        return offer;
    } catch (err) {
        console.error(err);
        return null;
    }
}

