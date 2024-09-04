function dinamicSection(section) {
    const nextBtn = section.getElementsByClassName('next-btn')[0];
    const carousel = section.getElementsByClassName('carousel')[0];
    const generCount = section.getElementsByClassName('gener-count');
    let countC = 0;
    
    function nextCount() {
      generCount[countC].classList.remove('active');
      countC = countC < generCount.length - 1 ? countC + 1 : 0;
      generCount[countC].classList.add('active');
    }
    
    function prevCount() {
      generCount[countC].classList.remove('active');
      countC = countC > 0 ? countC - 1 : generCount.length - 1;
      generCount[countC].classList.add('active');
    }
    
    function movePrev() {
      prevCount();
      for (let i = 0; i < 5; i++) {
        const lastChild = carousel.children[carousel.children.length - 1];
        carousel.insertBefore(lastChild, carousel.children[0]);
      }
      carousel.style.transition = 'none';
      carousel.style.transform = `translateX(calc(-5 * ((100vw - 8rem) / 5)))`;
      setTimeout(() => {
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = 'translateX(0)';
      }, 0);
    }
    
    function firstNext() {
      const padre = nextBtn.parentNode;
      if (!padre.querySelector('.prev-btn')) {
        let button = document.createElement('button');
        button.className = 'prev-btn';
        button.innerText = '<';
        padre.insertBefore(button, carousel.parentNode);
        button.addEventListener('click', movePrev);
      }
    }
    
    function moveNext() {
      firstNext();
      nextCount();
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(calc(-5 * (100vw - 8rem) / 5))`;
      setTimeout(() => {
        carousel.style.transition = 'none';
        for (let i = 0; i < 5; i++) {
          const firstChild = carousel.children[0];
          carousel.appendChild(firstChild);
        }
        carousel.style.transform = 'translateX(0)';
      }, 500);
    }
  
    if (generCount.length > 0) {
      if (generCount.length === 1) {
        generCount[0].remove();
        nextBtn.remove();
      } else {
        generCount[0].classList.add('active');
        nextBtn.addEventListener('click', moveNext);
      }
    }
  }
module.exports = dinamicSection;