const router = require("express").Router();
const userRoutes = require("./users");
const messageRoutes = require("./messages");
const authRoutes = require('./auth');


router.use("/users", userRoutes);
// router.use("/login", userRoutes);

router.use("/messages", messageRoutes);

router.use("/auth", authRoutes);


module.exports = router;
