const db = require("../models");
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
    console.log("getting all users but: " + req.params.currentUserId);
    db.Users.find({ "_id": { $ne: req.params.currentUserId } })
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));
  },

  addFavorite: function (req, res) {
    console.log(`adding fav: ${req.body.userId}/${req.body.favUserId}`);
    db.Users.updateOne(
      { _id: mongoose.Types.ObjectId(req.body.userId) },
      { $push: { favorites: mongoose.Types.ObjectId(req.body.favUserId) } }
    ).then(dbModel => res.json(dbModel))
      .catch(err => console.log(err));

  },

  removeFavorite: function (req, res) {
    console.log(`removing fav: ${req.body.userId}/${req.body.favUserId}`);
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
  remove: function (req, res) {
    console.log("delete: " + req.params.id);
    db.Users
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
