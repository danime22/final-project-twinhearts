const db = require("../models");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Defining methods for the booksController
module.exports = {
    save: function (req, res) {
        console.log(req.body);
        let parts = req.body.file.split(",");
        let buf = Buffer.from(parts[1], 'base64');
        let mime = (parts[0].split(";"))[0].split(":");

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

"male.png"
"female.png"
