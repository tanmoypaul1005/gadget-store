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
offerPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
description: {
    type: String,
    required: true
},
},{timestamps:true});

export default mongoose.models.Offer || mongoose.model('Offer', offerSchema);  