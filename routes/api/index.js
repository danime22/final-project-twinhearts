const router = require("express").Router();
const userRoutes = require("./users");
const messageRoutes = require("./messages");


router.use("/users", userRoutes);
// router.use("/login", userRoutes);

router.use("/messages", messageRoutes);


module.exports = router;
