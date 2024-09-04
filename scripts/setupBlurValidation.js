const setupBlurValidation = (formHelps,inputElement, helpIndex, message) => {
    inputElement.addEventListener('blur', () => {
      if (!inputElement.value) {
        formHelps[helpIndex].innerHTML = message;
      } else {
        formHelps[helpIndex].innerHTML = ""; 
      }
    });
  };
module.exports = setupBlurValidation;