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


module.exports = router;