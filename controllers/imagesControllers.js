const db = require("../models");
const mongoose = require("mongoose");
const path = require("path");

// Defining methods for the booksController
module.exports = {
    save: function (req, res) {
        let parts = req.body.file.split(",");
        let buf = Buffer.from(parts[1], 'base64');
        let temp = (parts[0].split(";"))
        let mime = temp[0].split(":");

        db.Images
            .create({ mimeType: mime[1], binData: buf })
            .then(dbModel => res.json({ _id: dbModel._id }))
            .catch(err => res.status(422).json(err));
    },

    get: function (req, res) {
        if (req.params.id.indexOf("male.png") > -1) {
            res.contentType("image/png");
            res.sendFile(path.resolve(__dirname + "/../img/" + req.params.id));
        } else {
            db.Images
                .findOne({ _id: mongoose.Types.ObjectId(req.params.id) })
                .then(dbModel => {
                    res.contentType(dbModel.mimeType);
                    res.send(dbModel.binData);
                })
                .catch(err => res.status(422).json(err));
        }
    }

};


