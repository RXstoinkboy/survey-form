export function checkValidity(elements){
    const fieldsAreValid = {i:true};
    const bottomCnt = document.querySelector('.bottom-cnt');
    const bottom = bottomCnt.querySelector('.bottom');
    const rightCnt = document.querySelector('.right-cnt');
    const right = rightCnt.querySelector('.right');

    elements.forEach(elem =>{
        if(elem.checkValidity()){
            elem.classList.remove('error');
            


        }
        else {
            elem.classList.add('error');
            const errorHint = document.createElement('div');
            const errorText = right.dataset.error;
            errorHint.classList.add('notValid');
            errorHint.innerText = errorText;
            rightCnt.appendChild(errorHint);
            fieldsAreValid.i = false;
        }
    })

    return fieldsAreValid;

}