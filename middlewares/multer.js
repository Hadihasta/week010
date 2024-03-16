const multer = require("multer")
const path = require("path")


// tentukan storage + file name

const diskStorage = multer.diskStorage({
    destination : (req,file, cb) => {
        cb(null, path.join(__dirname,"../uploads") )

    },
    filename : (req,file,cb) => {

        const myFileName =  file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        cb(null,myFileName)
    }
})


// single ---> hanya bisa uploud 1 file
const multerMiddleware = multer({storage : diskStorage}).single("image")

module.exports = multerMiddleware;