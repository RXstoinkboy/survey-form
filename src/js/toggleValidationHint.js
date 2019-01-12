export function showValidationHint(elem){
    const inputCntRight = elem.closest('.right-cnt');
    const errorFieldRight = inputCntRight.querySelector('.notValid');

    if(errorFieldRight === null){
        const errorText = inputCntRight.dataset.error;
        const errorDivRight = document.createElement('div');
        errorDivRight.classList.add('notValid');
        errorDivRight.innerText = errorText;
        inputCntRight.appendChild(errorDivRight);
    }
}

export function hideValidationHint(elem){
    const inputCntRight = elem.closest('.right-cnt');
    const errorFieldRight = inputCntRight.querySelector('.notValid');

    if(errorFieldRight !== null){
        errorFieldRight.remove();
    }
}