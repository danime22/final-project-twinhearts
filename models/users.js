const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        name: String,
        birthday: Date,
        gender: String,
        email: String,
        password: String,
        city: String,
        state: String,
        zip: Number,
        favorites: [String],
        lastActivity: Date,
        profile: {
            headline: String,
            description: String,
            targetGender: [String],
            height: Number,
            bodyType: String,
            religion: String,
            drinking: String,
            smoking: String,
            eating: String,
            pets: String,
            hasChildren: Boolean,
            wantsChildren: Boolean,
            wouldTravel: Boolean,
            willingToRelocate: Boolean,
            seekingGender: [String],
            photos: [String]
        }

    }
)
module.exports = mongoose.model("Users", DataSchema);


