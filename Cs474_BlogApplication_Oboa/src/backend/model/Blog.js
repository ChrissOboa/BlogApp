import mongoose from "mongoose";
//schema blog collection
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref:"User", 
        required: true, 
    
    },

    date: {
       type: Date,
       
       default: Date.now
   }

  
});


export default mongoose.model("Blog", blogSchema);
