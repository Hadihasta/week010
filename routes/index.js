const express = require("express")
const router = express.Router()
const movieRouter = require("./movieRoute")
const userRouter = require("./userRoute")
const path = require("path")

router.use("/api/movie",movieRouter)
router.use("/api/user",userRouter)
// agar dapat dibuka di browser , image di hosting  require path ----> 
router.use("/api/images", express.static(path.join(__dirname, "../uploads")))


module.exports = router