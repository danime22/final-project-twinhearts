const db = require("../models");
const axios = require("axios");
const fs = require("fs");
const uuid = require("uuid/v1");
const path = require("path");
//const APIKEY = "2HU64PyyHRymqDKkKwNvWuFTg6GAn7AndKViBIWr7TXJyjvlj6IeLMj03t7RdyZr"
const mongoose = require("mongoose");

// Defining methods for the booksController
module.exports = {

  login: function (req, res) {
    console.log("Loggining in " + JSON.stringify(req.body));
    db.Users
      .findOne(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  onlineUsers: function (req, res) {
  
    db.Users.find({ "_id": { $ne: req.params.currentUserId }, gender: {$in: req.body.targetGender}, targetGender: req.body.gender })
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },

  addFavorite: function (req, res) {
    db.Users.updateOne(
      { _id: mongoose.Types.ObjectId(req.body.userId) },
      { $push: { favorites: mongoose.Types.ObjectId(req.body.favUserId) } }
    ).then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));

  },

  removeFavorite: function (req, res) {
    db.Users.updateOne(
      { _id: mongoose.Types.ObjectId(req.body.userId) },
      { $pull: { favorites: req.body.favUserId } }
    ).then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));

  },


  getFavorites: function (req, res) {
    db.Users.findOne({ _id: mongoose.Types.ObjectId(req.params.id) })
      .then((dbUser) => {
        db.Users.find({ _id: { $in: dbUser.favorites } })
          .then(dbFavs => res.json(dbFavs))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err));
  },


  findAll: function (req, res) {
    db.Users
      .find(res.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Users
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    console.log("create");
    console.log(req.params.profilePic);
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  saveProfile: function (req, res) {
    //first see if they uploaded a profile pic
   

    console.log("saving profile for" + req.body.id);
    db.Users.findOneAndUpdate({ _id: req.body.id }, 
      { $set: { profile: req.body.profile }}
    )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },



  remove: function (req, res) {
    console.log("delete: " + req.params.id);
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function (req, res) {
    // console.log(req.query);
    // return res.json({msg: "okay"});
    if (req.query.distance === "" || req.query.zip === "") {
      return res.status(400).json({ msg: "You must supply a zip and distance" });
    }



    const url = `https://www.zipcodeapi.com/rest/${process.env.APIKEY}/radius.json/${req.query.zip}/${req.query.distance}/miles`
    axios.get(url).then(response => {
      const zips = response.data.zip_codes
      const zipcodes = zips.map(zip => zip.zip_code)

      const query = {};
      for (var property in req.query) {
        if (req.query.hasOwnProperty(property)) {
          if (property === "zip" || property === "distance" || property === "excludeId") continue;
          query[property] = req.query[property];
        }
      }
      // TODO: Need to exclude current user
      //query mongoose db
      //console.log({...query, zip: { $in: zipcodes }});
      db.Users.find({ ...query, zip: { $in: zipcodes } }).then(dbres => {
        return res.status(200).json(dbres);
      }).catch(err => {
        console.log(err)
        return res.status(418).json(err);
      });
    }).catch(err => {
      console.log(err)
      return res.status(400).json(err);
    });
  }
};
