const handlerClickClear = (form,clearForm,formHelps) => {
    form.reset();
    clearForm(formHelps);
}



module.exports = handlerClickClear