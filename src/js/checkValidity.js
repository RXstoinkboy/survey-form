export function checkValidity(elements){
    const fieldsAreValid = {i:true};

    elements.forEach(elem =>{
        if(elem.checkValidity()){
            elem.classList.remove('error');
            elem.classList.remove('notValid');
        }
        else {
            elem.classList.add('error');
            elem.classList.add('notValid');
            fieldsAreValid.i = false;
        }
    })

    return fieldsAreValid;

}