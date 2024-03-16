const MovieService = require("../services/movieService");

class GameController {
  // method
  // List movies with filter
  static findAll = async (req, res, next) => {
    try {
      const movie = await MovieService.findAll(req.query);
      res.status(200).json(movie);
    } catch (err) {
      next(err);
    }
  };

  // search movie by id
  static findOne = async (req, res, next) => {
    try {

      const movie = await MovieService.findOne(req.params.id)
      res.status(200).json({
        data : movie
      })

    } catch (err) {
      next(err);
    }
  };

  // create movie
  static create = async (req, res, next) => {
    try {

        const movies = await MovieService.create(req.body)
        

        res.status(201).json({
            message : "Movie added to list",
            data : movies
        })

    } catch (err) {
      next(err);
    }
  };

//   uploads
  static uploads = async (req,res,next) =>{
    try{
        const url = await MovieService.uploads(req.file);

        res.status(201).json({
            message : "Upload succes...",
            image_url : url
        })

    }catch(err){
        next(err)
    }
  }

  // update movie
  static update = async (req, res, next) => {
    try {
      const params = {
        id : req.params.id ,
        body: req.body
      }
     await MovieService.update(params)

      res.status(200).json({message : "Movie Updated"})

    } catch (err) {
      next(err);
    }
  };

  // delete
  static delete = async (req, res, next) => {
    try {


      await MovieService.delete(req.params.id)

      res.status(200).json({message : "MOVIE DELETED"})
    } catch (err) {
      next(err);
    }
  };



}

module.exports = GameController;
