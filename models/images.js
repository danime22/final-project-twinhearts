const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
    {
        mimeType: String,
        binData: Buffer
    }

)
module.exports = mongoose.model("Images", ImageSchema);