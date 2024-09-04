const Swal = require('sweetalert2');
const handlerClickSubmit = async (e,title,year,director,duration,rate,url,formHelps,validateInputs,getFormValues,existsMovie,postMovie,clearForm,form) => {
    e.preventDefault();
    e.target.blur();
    if(validateInputs(title,year,director,duration,rate,url,formHelps)){
      const movie = getFormValues(title,year,director,duration,rate,url);
      const confirmation = await Swal.fire({
        title: "¿Estás seguro de crear la siguiente película?",
        html: `<div class="fall-back position-relative d-flex align-items-start justify-content-center" style="opacity: 1;">
                  <img class="img-fallBack" src="${movie.poster}">
                  <h3 class="title-fallBack">${movie.title}</h3>
                  <p class="year-fallBack ">Año: ${movie.year}</p>
                  <p class="director-fallBack">Director: ${movie.director}</p>
                  <p class="duration-fallBack">Duración: ${movie.duration}</p>
                  <p class="rate-fallBack ">Calificación: ${movie.rate}☆</p>
                  <p class="listGeners-fallBack">${movie.genre.join(' · ')}</p>
                </div>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí, estoy seguro!"
      });

      if (confirmation.isConfirmed) {
        try {
          const movieExists = await existsMovie(movie.title);

          if (movieExists) {
            throw new Error("No puedes usar este titulo"); 
          }

          const newM = await postMovie(movie);
          if(newM){
            await Swal.fire({
            title: "¡Éxito!",
            text: "La película se creó con éxito.",
            icon: "success"
            });

            clearForm(form,formHelps); 
          }else{
            throw new Error("Ocurrio un error inesperado");
          }
          

        } catch (err) {
          console.log(err);
          await Swal.fire({
            title: "¡Ocurrió un error!",
            text: err.message,
            icon: "error"
          });

          if (err.message === "No puedes usar este titulo") {
            formHelps[0].innerHTML = "*Intenta con otro título";
            title.focus();
          }
        }
      }
    }
  }

module.exports = handlerClickSubmit;

