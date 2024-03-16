const errorHandler = (err,req,res,next) => {
    console.log(err)

    if (err.name === "Missing File"){
        res.status(400).json({message : "Missing  File"})
    }else if (err.name === "USER NOT FOUND"){
        res.status(400).json ({name : "NOT FOUND BY MIDDLEWARE", message: err.message})
    }
    else if  ( err.name ==="Error"){
        res.status(400).json({name: "Error not found" , message : err.message })
    }else{ 
        res.status(500).json({message : "INTERNAL SERVER ERROR"})
    }
}

module.exports = errorHandler