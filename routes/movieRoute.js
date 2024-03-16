const express = require("express")
const router = express.Router()
const MovieController = require("../controllers/movieController.js")
const multer = require("../middlewares/multer.js")



router.get("/",MovieController.findAll)
router.get("/:id",MovieController.findOne)
router.post("/",MovieController.create)
router.post("/uploads",multer, MovieController.uploads)
router.put("/:id",MovieController.update)
router.delete("/:id",MovieController.delete)



module.exports = router