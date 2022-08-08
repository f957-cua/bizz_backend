import mongoose from "mongoose"

const Document = new mongoose.Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true}
}, {versionKey: false})

export default mongoose.model("Document", Document)