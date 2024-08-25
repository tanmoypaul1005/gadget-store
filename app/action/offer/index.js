import Offer from "@/models/Offer";
import Products from "@/models/Products";
import connectMongo from "@/util/db";

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
        const offer = await Products.find({offer: offer_id});
        console.log("offer", offer);
        console.log("offer_id", offer_id);
        return offer;
    } catch (err) {
        console.error(err);
        return null;
    }
}
