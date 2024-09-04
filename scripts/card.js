let hoverTimer;
function generateModal(e, peli) {
    let padre = e.target.closest('.card-carousel'); 
    padre.style.cursor = 'auto';
  
    let divBack = document.createElement('div');
    divBack.classList.add('fall-back', 'position-absolute', 'd-flex', 'align-items-start', 'justify-content-center');

    let imgBack = document.createElement('img');
    imgBack.classList.add('img-fallBack');
    imgBack.src = peli.poster;
    divBack.appendChild(imgBack);
  
    let title = document.createElement('h3');
    title.classList.add('title-fallBack');
    title.innerText = peli.title;
    divBack.appendChild(title);

    let year = document.createElement('p');
    year.classList.add('year-fallBack');
    year.innerText = `Año: ${peli.year}`;
    divBack.appendChild(year);
    
    let director = document.createElement('p');
    director.classList.add('director-fallBack');
    director.innerText = `Director: ${peli.director}`;
    divBack.appendChild(director);

    let duration = document.createElement('p');
    duration.classList.add('duration-fallBack');
    duration.innerText = `Duración: ${peli.duration}`;
    divBack.appendChild(duration);
  
    let rate = document.createElement('p');
    rate.classList.add('rate-fallBack');
    rate.innerText = `Calificación: ${peli.rate}☆`;
    divBack.appendChild(rate);
  
    let btnPlay = document.createElement('a');
    btnPlay.classList.add('btn-play');
    let imgPlay = document.createElement('img');
    imgPlay.classList.add('img-play');
    imgPlay.src = '../public/img/boton-de-play.png';
    btnPlay.appendChild(imgPlay);
    divBack.appendChild(btnPlay);
  
    let listGeners = document.createElement('p');
    listGeners.classList.add('listGeners-fallBack');
    listGeners.innerText += peli.genre.join(' · ');
    divBack.appendChild(listGeners);
    
    document.body.appendChild(divBack);
  
    let rect = padre.getBoundingClientRect();
    let modalWidth = divBack.offsetWidth;
    let modalHeight = divBack.offsetHeight;
    let viewportWidth = window.innerWidth - (8 * 16 + 1); 
    let viewportHeight = window.innerHeight;
  
    let leftPosition = rect.left + window.scrollX;
    if (rect.left + modalWidth > viewportWidth) {
      leftPosition = viewportWidth  - modalWidth;
    }
  
    let topPosition = rect.top + window.scrollY;
    if (rect.top + modalHeight > viewportHeight) {
      topPosition = rect.top + window.scrollY - modalHeight + padre.offsetHeight;
    }
    
    divBack.style.left = `${leftPosition}px`;
    divBack.style.top = `${topPosition}px`;
    divBack.style.width = "20em";
  
    setTimeout(() => {
      divBack.style.opacity = 1;
    }, 200);
  
    divBack.addEventListener('mouseleave', () => {
      setTimeout(() => {
        divBack.style.opacity = 0;
        setTimeout(() => {
          divBack.remove();
        }, 300);
      }, 200);
    });
  }
  
function generCard(peli) {
    let div = document.createElement('div');
    div.classList.add('card-carousel', 'd-flex', 'align-items-center', 'justify-content-center');
  
    let img = document.createElement('img');
    img.classList.add('poster');
    img.src = peli.poster;
    div.appendChild(img);
  
    div.addEventListener('mouseenter', (e) => {
      hoverTimer = setTimeout(() => {
        generateModal(e, peli);
      }, 500);
    });
  
    div.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
    });
  
    return div;
}

module.exports = generCard;