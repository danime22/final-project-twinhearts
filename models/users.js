const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        id: Number,
        name: String,
        age: Number,
        gender: String,
        email: String,
        password: String,
        profile: {
        religion: String,
        zipcode: Number,
        description: String,
        },

    }
)
module.exports = mongoose.model("Users", DataSchema);


