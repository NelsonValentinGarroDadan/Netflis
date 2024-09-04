const genetGeners = require('./generGener');
const generateSection = require('./generSection');
const dinamicSection = require('./dinamicSection');
const generCard = require('./card');
function generateHtml(data) {
    const main = document.getElementsByTagName('main')[0];
    let section;
    let arrayGeners = genetGeners(data);
    for(let i = 0; i < arrayGeners.length; i++){
      section = generateSection(arrayGeners[i],data);
      main.appendChild(section);
      dinamicSection(section);
    }

    let allMovies = document.createElement('section');
    allMovies.classList.add('allMovies');

    let allMoviesTitle = document.createElement('h2');
    allMoviesTitle.classList.add('allMovies-title');
    allMoviesTitle.innerText = "Todo nuestro catálogo."
    allMovies.appendChild(allMoviesTitle);

    let allMoviesContainer = document.createElement('div');
    allMoviesContainer.classList.add('allMovies-container');
    

    data.forEach(movie => {
      allMoviesContainer.appendChild(generCard(movie));
    });
    allMovies.appendChild(allMoviesContainer);
    main.appendChild(allMovies);
}
module.exports = generateHtml;