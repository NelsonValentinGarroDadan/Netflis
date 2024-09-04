function generCount(containerGenerCount, array) {
    const maxSize = Math.ceil(array.length / 5);
    let span;
    for (let i = 0; i < maxSize; i++) {
      span = document.createElement('span');
      span.classList.add('gener-count');
      containerGenerCount.appendChild(span);
    }
  }
module.exports = generCount;
  