import Offer from "@/models/Offer";
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

