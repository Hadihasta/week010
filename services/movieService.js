const MovieRepository = require("../repositories/movieRepository");
const { Op } = require("sequelize");
const { param } = require("../routes");
const DEFAULT_LIMIT = 10
const DEFAUL_PAGE = 1

class MovieService {
  static findAll = async (params) => {
    try {
      let {title , genres, year, limit,page} = params

      let filterAll = { 
        where: {}
        
      }
        
      let titleFilter= {}
      let genresFilter = {}
      let yearFilter = {}

        if(title){
            titleFilter = {
               title : {
                [Op.iLike]: `%${title}%`
               
               }   
            }}
        

        if(genres){
            genresFilter = { 
                genres : {
                    [Op.iLike]: `%${genres}%`
                 }
                
            }
        }

        if(year){
            yearFilter ={
                // (+) mengubah string jadi integer
                year: +year
            }
        }
      

        filterAll.where = {
            ...titleFilter,
            ...genresFilter,
            ...yearFilter
         }

         
      
          // (+) mengubah string jadi integer    
         limit = +limit || DEFAULT_LIMIT
         page =  +page || DEFAUL_PAGE
          //  offset = mulai dari nomor 
         const offset = (page-1) *limit


         filterAll.limit = limit
         filterAll.offset = offset


      const {count , rows} = await MovieRepository.findAll(filterAll);



         let totalPages = Math.ceil(count/limit)
         let nextPages = (page+1) <  totalPages ? page + 1 : null
         let prevPages = (page-1) > 0 ? page -1 :null
         let currentPages = page
         


      return  {
        data : rows,
        totalData : count,
        totalPages,
        nextPages,
        prevPages,
        currentPages
      }
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id) =>{
    try{
      const filter = {
        where : { 
          id
        }
      }
    const movie = await MovieRepository.findOne(filter)
    return movie

      }catch(err){
      throw err
    }
  }

 static create = async (params) => {
  try{

   const movie = await  MovieRepository.create(params)
   return movie

  }catch(err){
    throw err
  }
 }

static uploads = async (file) => {
  try{
    if(file){
      // create url
     const url = `${process.env.BASE_URL}/api/images/${file.filename}`
   return url
    }else{
      throw {name: "Missing File"}
    }

  }catch(err){
    throw err
  }
}


static update = async (params) => { 
  try{
  
const {id,body} = params

await MovieRepository.update(id,body)


  }catch(err){
    throw err
  }
}


static delete = async (id) => { 
  try {

    const filter = { 
      where : {
        id
      }
    }

    const movie = await MovieRepository.delete(filter)
return movie

  } catch (error) {
    throw err
  }
}

}


module.exports = MovieService;
