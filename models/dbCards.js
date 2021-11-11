import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String,
    imageUrl: String
});

console.log("connected to mongoose")

export default mongoose.model('cards', cardSchema);