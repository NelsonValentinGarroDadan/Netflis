
function genetGeners(tempData) {
    const geners = [];
    tempData.forEach(movie => {
      movie.genre.forEach(g => {
        if (!geners.includes(g) && geners.length < 3) geners.push(g);
      });
    });
    return geners;
  }
  module.exports = genetGeners;