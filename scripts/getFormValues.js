const getFormValues = (title,year,director,duration,rate,url) => {
    const genres = [];
    document.querySelectorAll("input[type='checkbox']:checked").forEach((checkbox) => {
      genres.push(checkbox.nextElementSibling.textContent.trim());
    });
    let horas = Math.round(duration.value / 60);
    let min = Math.ceil(duration.value - (horas*60));
    let durationStr = `${horas}h ${min}min`

    return {
      title: title.value,
      year: year.value,
      director: director.value,
      duration: durationStr,
      rate: rate.value,
      poster: url.value,
      genre: genres,
    };
  };
module.exports = getFormValues;