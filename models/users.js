const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {
        name: String,
        birthday: Date,
        gender: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        city: String,
        state: String,
        zip: {
            type: Number,
            required: true
        },
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

    },

  
)
module.exports = mongoose.model("Users", DataSchema);


