const router = require("express").Router();
const usersController = require("../../controllers/usersControllers");



router.route("/")
.get(usersController.findAll)
.post(usersController.create);

router.route("/:id")
.get(usersController.findById)
.put(usersController.update)
.delete(usersController.remove);

router.route("/login")
.post(usersController.login);

router.route("/onlineUsers/:currentUserId")
.get(usersController.onlineUsers);


router.route("/addFavorite")
.post(usersController.addFavorite);

router.route("/removeFavorite")
.post(usersController.removeFavorite);


router.route("/favorites/:id")
.get(usersController.getFavorites);




module.exports = router;