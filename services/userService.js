const user = require("../models/user")
const UserRepository = require("../repositories/userRepository")
const { param } = require("../routes")

class UserService { 
 
static findAll = async(params) => {
     try {
        const user = await UserRepository.findAll(params)
        return user
     } catch (error) {
        throw err
     }
}


static create = async (params) => {
    try {
        const user = await UserRepository.create(params)

        return user
    } catch (error) {
        throw error
    }
}





static update = async (params) =>{
    try {
        const {id , body} = params
    await UserRepository.update(id,body)


    } catch (error) {
        throw error
        
    }
}


static delete = async(params) =>{
    try {
        const id = params

        await UserRepository.delete(id)
    } catch (error) {
        throw error
    }
}


}

module.exports = UserService