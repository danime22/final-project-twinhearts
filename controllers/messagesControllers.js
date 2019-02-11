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

    getMessages: function(req, res) {
        db.Messages.findOne({_id: mongoose.Types.ObjectId(req.params.id)})
        .then(dbMessages => res.json(dbMessages))
        .catch(err => res.status(422).json(err));
    },

    getMessagesForUser: function (req, res) {
        // db.getCollection("messages")
        //     .find(({ $or: [{ user1Id: mongoose.Types.ObjectId("5c54e5e875503b2ec6c3f58d") }, { user2Id: mongoose.Types.ObjectId("5c54e5e875503b2ec6c3f58d") }] }))
        console.log(req.params.userId);
        db.Messages.find(
            {
                $or: [{ user1Id: req.params.userId },
                { user2Id: req.params.userId }]
            })
            .then(dbMessages => {
                otherUserIds = [];
                for (i = 0; i < dbMessages.length; i++) {
                    let otherUserId = dbMessages[i].user1Id !== req.params.userId ? dbMessages[i].user1Id : dbMessages[i].user2Id;
                    otherUserIds.push(mongoose.Types.ObjectId(otherUserId));
                }

                messages = [];

                db.Users.find({ _id: { $in: otherUserIds } })
                    .then(dbUsers => {
                        for (i = 0; i < dbMessages.length; i++) {
                            for (j = 0; j < dbUsers.length; j++) {
                                if (dbMessages[i].user1Id == dbUsers[j]._id || dbMessages[i].user2Id == dbUsers[j]._id ) {
                                    dbMessages[i]["otherUserName"] = dbUsers[j].name;
                                    messages.push(
                                        {
                                            _id: dbMessages[i]._id,
                                            user1Id: dbMessages[i].user1Id,
                                            user2Id: dbMessages[i].user2Id,
                                            otherUserName: dbUsers[j].name,
                                            profilePic: dbUsers[j].profile.profilePic
                                        }
                                    )
                                    break;
                                }
                            }
                        }
                        res.json(messages);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => res.status(422).json(err))
    },

    addMessage: function (req, res) {
        db.Messages
            .updateOne(
                { _id: mongoose.Types.ObjectId(req.body.messageId) },
                { $push: { messages: req.body.message } })
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    }
};



