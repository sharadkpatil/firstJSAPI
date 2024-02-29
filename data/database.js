import mongoose from "mongoose";


export const dbConnect = () =>{
    mongoose.connect(process.env.MONGODB_URI, {
    dbName:"JSAPI",
}).then(() => console.log("Database connected"))
.catch(e => console.log(e));
}