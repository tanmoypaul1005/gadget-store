const mongoose=require('mongoose');


const addressSchema=new mongoose.Schema({

user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

address:[
    {
        name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50,
      },

      phone: {
        type: Number,
        required: true,
        trim: true,
      },

      postal_code: {
        type: String,
        required: true,
        trim: true,
      },

      locality: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100,
      },

      address: {
        type: String,
        required: true,
        trim: true,
      },
      
      district: {
        type: String,
        required: true,
        trim: true,
      },

      rode_name:{
        type: String,
        required: true,
        required: true,
      },

      house_name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 50,
      },
   
      address_type: {
        type: String,
        required: true,
        enum: ["home", "work"],
        required: true,
      },
    }
]
},{timestamps:true});

export default mongoose.models.Address || mongoose.model('Address', addressSchema);