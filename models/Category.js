const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    icon:{
        type: String,
        default:""
    },
    banner:{
        type: String,
        default:""
    },
    status: {
        type: String,
        default:"sub_category"
    },
    parent_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
 
},{timestamps:true});

export default mongoose?.models?.Category || mongoose?.model('Category', categorySchema);