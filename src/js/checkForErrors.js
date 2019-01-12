import {showValidationHint, hideValidationHint, hideCheckboxError} from './toggleValidationHint.js';

export function checkForErrors(elems = [], checkboxMarked){
    const fieldsAreValid = {s: true};
    
    elems.forEach(elem => {
        if(elem.type !== 'checkbox'){
            if(elem.checkValidity()){
                hideValidationHint(elem);
                elem.classList.remove('error');
            } else {
                showValidationHint(elem);
                elem.classList.add('error');
                fieldsAreValid.s = false;
            }
        }  
    });

        const checkboxFieldset = document.querySelector('.right__experience');
    
        console.log(checkboxMarked);
        if(checkboxMarked === 0){
            showValidationHint(checkboxFieldset);
            checkboxFieldset.classList.add('error');
            fieldsAreValid.s = false;

        } else if (checkboxMarked !== 0){
            hideCheckboxError(checkboxMarked);
        }

    return fieldsAreValid.s;
}

