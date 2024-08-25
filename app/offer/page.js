import React from 'react'
import { getOffer } from '../action/offer';

const Offer = async() => {

    const offerList=await getOffer();
    
    return (
        <div>
            
        </div>
    )
}

export default Offer