import mongoose,{ Schema,model,models} from "mongoose";

const promptSchema = new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    prompt:{
        type:String,
        required:[true,"prompt is required"],
    }
})