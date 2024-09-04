const getFormValues = require('./getFormValues.js');
const clearHelpers = require('./clearHelpers.js');
const validateInputs = (title,year,director,duration,rate,url,formHelps) => {
    const values = getFormValues(title,year,director,duration,rate,url);
    let isValid = true;

    const checks = [
      { field: values.title, index: 0, message: "*El título no puede estar vacío." },
      { field: values.year, index: 1, message: "*El año de estreno no puede estar vacío." },
      { field: values.director, index: 2, message: "*El director no puede estar vacío." },
      { field: values.duration, index: 3, message: "*La duración no puede estar vacía." },
      { field: values.genre.length > 0, index: 4, message: "*Debe seleccionar al menos un género." },
      { field: values.rate, index: 5, message: "*La calificación no puede estar vacía." },
      { field: values.poster, index: 6, message: "*La URL del póster no puede estar vacía." },
    ];

    clearHelpers(formHelps);

    checks.forEach((check) => {
      if (!check.field) {
        formHelps[check.index].innerHTML = check.message;
        isValid = false;
      }
    });
    return isValid;
};

module.exports = validateInputs;