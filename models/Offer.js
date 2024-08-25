const mongoose=require('mongoose');

const offerSchema=new mongoose.Schema({

title: {
    type: String,
    required: true,
    trim: true
},
thumbnail: {
    type: String,
    required: true,
    trim: true
},
description: {
    type: String,
    required: true
},
},{timestamps:true});

export default mongoose.models.Offer || mongoose.model('Offer', offerSchema);  