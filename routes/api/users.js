const router = require("express").Router();
const usersController = require("../../controllers/usersControllers");



router.route("/login")
.post(usersController.login);
router.route("/register")
.post(usersController.create)

router.route("/onlineUsers/:currentUserId")
.get(usersController.onlineUsers);

router.route("/search")
.get(usersController.search);

router.route("/:id")
.get(usersController.findById)
.put(usersController.update)
.delete(usersController.remove);

router.route("/")
.get(usersController.findAll)
.post(usersController.create);


module.exports = router;