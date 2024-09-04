const clearHelpers = (formHelps) => {
    formHelps.forEach(help => {
      help.innerHTML = "";
    });
};

module.exports = clearHelpers;