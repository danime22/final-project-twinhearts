const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the booksController
module.exports = {
    create: function (req, res) {
        console.log(req.body);
        db.Messages
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    },

    getMessages: function (req, res) {
        // db.getCollection("messages")
        //     .find(({ $or: [{ user1Id: mongoose.Types.ObjectId("5c54e5e875503b2ec6c3f58d") }, { user2Id: mongoose.Types.ObjectId("5c54e5e875503b2ec6c3f58d") }] }))

        db.Messages.find(
            {$or: [{user1Id: mongoose.Types.ObjectId("5c54e5e875503b2ec6c3f58d")}, 
            {user2Id: mongoose.Types.ObjectId("5c54e5e875503b2ec6c3f58d")}]})


            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },

    addMessage: function (req, res) {
        db.Messages
            .updateOne(
                { _id: mongoose.Types.ObjectId(req.body.messageId) },
                { $push: { messages: req.body.message }})
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));

    }

};
