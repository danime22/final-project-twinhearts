const router = require("express").Router();
const messagesController = require("../../controllers/messagesControllers");


router.route("/")
.post(messagesController.create);

router.route("/getMessagesForUser/:userId")
.get(messagesController.getMessagesForUser);

router.route("/:id")
.get(messagesController.getMessages);


router.route("/addMessage")
.post(messagesController.addMessage);


module.exports = router;

