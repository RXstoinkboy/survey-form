import {
    showValidationHint,
    hideValidationHint,
    hideCheckboxError,
    hideRadioError
} from './toggleValidationHint.js';

export function checkForErrors(elems = [], checkboxMarked, radioMark) {
    const fieldsAreValid = {
        s: true
    };

    elems.forEach(elem => {
        if (elem.type !== 'checkbox') {
            if (elem.checkValidity()) {
                hideValidationHint(elem);
                elem.classList.remove('error');
            } else {
                showValidationHint(elem);
                elem.classList.add('error');
                fieldsAreValid.s = false;
            }
        }
    });

    const checkboxFieldset = document.querySelector('.right--experience');

    if (checkboxMarked === 0) {
        showValidationHint(checkboxFieldset);
        checkboxFieldset.classList.add('error');
        fieldsAreValid.s = false;

    } else if (checkboxMarked !== 0) {
        hideCheckboxError(checkboxMarked);
    }

    const radioCnt = document.querySelector('.right--radios');

    if (radioMark === false) {
        showValidationHint(radioCnt);
        radioCnt.classList.add('error');
        fieldsAreValid.s = false;
    } else if (radioMark === true) {
        hideRadioError();
    }

    return fieldsAreValid.s;
}