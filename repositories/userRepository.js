const {User} = require("../models")


class UserRepository { 

static findAll = async (params) =>{
try {
    const user = await User.findAll(params)

    return user
} catch (error) {
    throw err
}

}




static create = async (params) => { 
    try {
        const user = await User.create(params,{
            returning : true
        })

        return user
    } catch (error) {
        throw error
    }
}







static update = async (id,body) => {
    try {
        const user = await User.findOne({
            where : {
                id
            }
          
        })

      
       
        if(!user)
       throw {message : "USER NOT FOUND"}

       await user.update(body)



    } catch (error) {
        throw error
    }
}

static delete = async (id) => {
    try {
        const user = await User.findOne({
            where : {
                id
            }
        })

        if (!user) 
        throw ({message : "NOT FOUND"})

        await user.destroy(id)
    } catch (error) {
        throw error
        
    }
}

}

module.exports = UserRepository