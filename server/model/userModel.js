import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    mobileNo:{
        type: Number,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    }

})

export default mongoose.model("User", userSchema);