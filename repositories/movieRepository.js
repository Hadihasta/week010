const {Movie} = require("../models")

class MovieRepository {

    static findAll = async (params) =>{
        try {
            // findAndCountAll adalah fitur sequelize yang mereturn 2 data 
// count datanya , rows total data ada berapa
            const {count,rows} = await Movie.findAndCountAll(params)

            return {count, rows}

        }catch(err){
            throw err
        }
    }


    static findOne = async (params) => { 
        try{

            const user = await User.findOne(params)
            if(!user )
            throw ({name : "Error", message : "Movie not found"})

            return user
        }catch(err){
            throw err
        }
    }


static create = async (params) => { 
    try{
        const movie = await Movie.create(params,{
            returning: true
        })

        
        return movie

    }catch(err) {
        throw err
    }
}

static update = async (id,body) => {
    try{    
        const movie = await Movie.findOne ({
            where: {
                id 
            }
        })

        if (!movie)
        throw {name : "Error", message : "Movie not found" }

        await movie.update(body)

    }catch(err){
        throw err
    }
}


static delete = async (params) => { 
    try {
        const movie = await Movie.findOne ({
           params
        })
        console.log(params,",<<<<<")
        
        if (!movie)
        throw {name : "Error", message : "Movie not found" }

        await movie.destroy()

  
    } catch (error) {
       throw err 
    }
}

}


module.exports = MovieRepository