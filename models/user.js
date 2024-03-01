import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: {
      type: String,
      unieuq: true,  
    },
    password: {
        type: String,
        select: false,
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
});

export const user = mongoose.model("User", schema );

