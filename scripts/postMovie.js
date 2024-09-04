const axios = require('axios');
const postMovie = async (movie) => {
  try{
    const newMovie = await axios.post("https://netflisapi.onrender.com/movies", movie);
    return newMovie.data;
  }catch(err){
    return err;
  }
  
};
module.exports = postMovie;