const mongoose = require("mongoose");
var DateOnly = require('mongoose-dateonly')(mongoose);
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
    {
        seeking: [String],
        profilePic: String,
        headline: String,
        description: String,
        salary: String,
        education: String,
        height: String,
        bodyType: String,
        religion: String,
        drinking: String,
        smoking: String,
        eating: String,
        pets: String,
        hasChildren: String,
        wantChildren: String,
        wantTravel: String,
        willingToRelocate: String,
        photos: [String]
    }
);

const DataSchema = new Schema(
    {
        name: String,
        birthday: DateOnly,
        gender: String,
        targetGender: [String],
        ethnicity: String,
        email: String,
        password: String,
        city: String,
        state: String,
        zip: {
            type: Number,
            required: true
        },
        favorites: [String],
        lastActivity: DateOnly,
        profile: ProfileSchema
    }

);
module.exports = mongoose.model("Users", DataSchema);


