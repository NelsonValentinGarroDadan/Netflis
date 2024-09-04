const axios = require('axios');
const existsMovie = async (title) => {
  try {
    const res = await axios.get(`http://localhost:3000/movies/${title}`);
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 400) {
      return null; 
    } else {
      throw err;
    }
  }
};

  module.exports = existsMovie;