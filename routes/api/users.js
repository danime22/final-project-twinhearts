const router = require("express").Router();
const usersController = require("../../controllers/usersControllers");



router.route("/login")
.post(usersController.login);

router.route("/register")
.post(usersController.create)

router.route("/onlineUsers")
.post(usersController.onlineUsers);


router.route("/saveProfile")
.post(usersController.saveProfile);

router.route("/search")
.get(usersController.search);

router.route("/:id")
.get(usersController.findById)
.put(usersController.update)
.delete(usersController.remove);

router.route("/")
.get(usersController.findAll)
.post(usersController.create);


router.route("/addFavorite")
.post(usersController.addFavorite);

router.route("/removeFavorite")
.post(usersController.removeFavorite);


router.route("/favorites/:id")
.get(usersController.getFavorites);


router.route("/favoritedMe/:id")
.get(usersController.favoritedMe);




module.exports = router;
