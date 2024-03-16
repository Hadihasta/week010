const userService = require("../services/userService")


class UserController { 

static findAll = async (req,res,next ) => {
    try {
        const user = await userService.findAll(req.query)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
}



static create = async (req,res,next) =>{
try {
    const user = await userService.create(req.body)

    res.status(201).json({message : "User added" ,
    data : "user"})
} catch (error) {
    next(err)
    
}
}




static update = async (req,res,next) =>{
    try {
        const params = {
            id: req.params.id,
            body: req.body
        }
         await  userService.update(params)

        res.status(200).json({message : "Updated Succesfully"})


    } catch (error) {
        next(err)
        
    }
}


static delete = async (req,res,next) =>{
    try {
    
       const params = req.params.id

        await userService.delete(params)

        res.status(200).json({message : " DELETED CURRENT USER"})
    } catch (error) {
        next(err)
        
    }
}

}


module.exports = UserController