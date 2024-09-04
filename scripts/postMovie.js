const axios = require('axios');
const postMovie = async (movie) => {
  try{
    const newMovie = await axios.post("http://localhost:3000/movies", movie);
    return newMovie.data;
  }catch(err){
    return err;
  }
  
};
module.exports = postMovie;