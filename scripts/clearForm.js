const clearHelpers = require('./clearHelpers.js');
const imgDefault = "../img/url-instr.jpeg";
const clearForm = (form,formHelps) =>{
    clearHelpers(formHelps);
    document.getElementById('srcImg').src = imgDefault;
    form.reset();
  }
module.exports = clearForm;