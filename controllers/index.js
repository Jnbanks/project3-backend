const express = require('express');
const router = express.Router();

const userRoutes = require("./userController")
router.use("/api/users",userRoutes)

const scoreRoutes = require("./scoreController")
router.use("/api/scores",scoreRoutes)


module.exports = router;