function filterMovies(genero,tempData) {
  return tempData.filter(mov => mov.genre.includes(genero));
}
  
function filterByPoster(url, tempData) {
  return tempData.filter(mov => mov.poster === url)[0];
}

module.exports = {filterByPoster, filterMovies};