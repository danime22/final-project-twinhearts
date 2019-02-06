const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        user1Id: String,
        user2Id: String,
        messages: [{
            userId: String,
            text: String,
            date: Date
        }]

    },


)
module.exports = mongoose.model("Messages", MessageSchema);