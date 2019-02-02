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


router.route("/addFavorite/:currentUserId/:favUserId")
.get(usersController.addFavorite);


module.exports = router;