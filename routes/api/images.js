const router = require("express").Router();
const imagesControllers = require("../../controllers/imagesControllers");

router.route("/save")
.post(imagesControllers.save);


router.route("/:id")
.get(imagesControllers.get);

module.exports = router;