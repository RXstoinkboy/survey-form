export function showValidationHint(elem){
    const inputCnt = elem.closest(`.right-cnt`) || elem.closest(`.bottom-cnt`);
    const errorField = inputCnt.querySelector('.notValid');

    if(errorField === null){
        const errorText = inputCnt.dataset.error;
        const errorDivRight = document.createElement('div');
        errorDivRight.classList.add('notValid');
        errorDivRight.innerText = errorText;
        inputCnt.appendChild(errorDivRight);
    }
}

export function hideValidationHint(elem){
    const inputCnt = elem.closest(`.right-cnt`) || elem.closest(`.bottom-cnt`);
    const errorField = inputCnt.querySelector('.notValid');

    if(errorField !== null){
        errorField.remove();
    }
}