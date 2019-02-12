const router = require("express").Router();
const userRoutes = require("./users");
const messageRoutes = require("./messages");
const imagesRoutes = require("./images");


router.use("/users", userRoutes);
// router.use("/login", userRoutes);

router.use("/messages", messageRoutes);

router.use("/images", imagesRoutes);


module.exports = router;
