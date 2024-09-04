const generCount = require('./generCount');
const {filterMovies} = require('./filters');
const generCard = require('./card');

function generateSection(genero,tempData) {
    let section = document.createElement('section');
    section.classList.add('geners', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');
    section.id = genero;
  
    let containerTogleGeners = document.createElement('div');
    containerTogleGeners.classList.add('container-togle-geners', 'd-flex', 'justify-content-between', 'align-items-center');
  
    let h2 = document.createElement('h2');
    h2.classList.add('gener-title');
    h2.innerText = genero;
    let containerGenerCounts = document.createElement('div');
    containerGenerCounts.classList.add('container-gener-counts', 'd-flex', 'align-items-center', 'justify-content-center');
    generCount(containerGenerCounts, filterMovies(genero,tempData));
    
    containerTogleGeners.appendChild(h2);
    containerTogleGeners.appendChild(containerGenerCounts);
  
    let containerCarousel = document.createElement('div');
    containerCarousel.classList.add('container-carousel', 'd-flex', 'align-items-center', 'justify-content-center');
    let carousel = document.createElement('div');
    carousel.classList.add('carousel', 'd-flex', 'align-items-center', 'justify-content-start');
    let card;
    let arrayMovies = filterMovies(genero, tempData);
    for (let i = 0; i < arrayMovies.length; i++) {
      card = generCard(arrayMovies[i]);
      carousel.appendChild(card);
    }
    
    let slider = document.createElement('div');
    slider.classList.add('slider');
    slider.appendChild(carousel);
    containerCarousel.appendChild(slider);
  
    let nextBtn = document.createElement('button');
    nextBtn.classList.add('next-btn');
    nextBtn.innerText = '>';
    containerCarousel.appendChild(nextBtn);
    
    section.appendChild(containerTogleGeners);
    section.appendChild(containerCarousel);
    return section;
  }

  module.exports = generateSection;
  