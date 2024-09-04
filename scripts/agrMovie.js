const validateInputs = require('./validateInputs.js');
const getFormValues = require('./getFormValues.js');
const clearForm = require('./clearForm.js');
const existsMovie = require('./exitsMovie.js');
const postMovie = require('./postMovie.js');
const setupBlurValidation = require('./setupBlurValidation.js');
const handlerClickSubmit = require('./handlerClickSubmit.js');
const handlerClickClear = require('./handlerClickClear.js');
function agrMovie(){
  const imgDefault = "../img/url-instr.jpeg";
  const form = document.getElementsByTagName("form")[0];
  const submitButton = document.querySelector("button[type='submit']");
  const clearButton = document.querySelector("button[type='button']");
  const formHelps = document.querySelectorAll(".form-text");

  const title = document.getElementById("inputTitle");
  const year = document.getElementById("inputYear");
  const director = document.getElementById("inputDirector");
  const duration = document.getElementById("inputDuration");
  const rate = document.getElementById("inputRate");
  const url = document.getElementById("inputUrl");


  setupBlurValidation(formHelps,title, 0, "*El título no puede estar vacío.");
  setupBlurValidation(formHelps,year, 1, "*El año de estreno no puede estar vacío.");
  setupBlurValidation(formHelps,director, 2, "*El director no puede estar vacío.");
  setupBlurValidation(formHelps,duration, 3, "*La duración no puede estar vacía.");
  setupBlurValidation(formHelps,rate, 5, "*La calificación no puede estar vacía.");
  url.addEventListener('blur',()=>{
      if (!url.value) {
          formHelps[6].innerHTML = "*La URL del póster no puede estar vacía.";
          document.getElementById('srcImg').src = imgDefault;
        } else {
          formHelps[6].innerHTML = ""; 
          document.getElementById('srcImg').src = url.value;
        }
  });

  submitButton.addEventListener("click",(e)=> handlerClickSubmit(e,title,year,director,duration,rate,url,formHelps,validateInputs,getFormValues,existsMovie,postMovie,clearForm,form,formHelps));

  clearButton.addEventListener("click", () => handlerClickClear(form,clearForm,formHelps));
};

module.exports = agrMovie;