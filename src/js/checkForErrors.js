import {showValidationHint, hideValidationHint} from './toggleValidationHint.js';

export function checkForErrors(elems = []){
    const fieldsAreValid = {s: true};
    
    elems.forEach(elem => {
        console.log(elem);
        if(elem.checkValidity()){
            hideValidationHint(elem);
            elem.classList.remove('error');
        } else {
            showValidationHint(elem);
            elem.classList.add('error');
            fieldsAreValid.s = false;
        }
    })

    return fieldsAreValid.s;
}