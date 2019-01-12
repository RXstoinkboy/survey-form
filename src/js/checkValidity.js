import {hideValidationHint} from './toggleValidationHint.js';
import { checkForErrors } from './checkForErrors.js';

export function checkValidity(){
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    form.setAttribute('novalidate', true);

    inputs.forEach(input => {
        input.addEventListener('input', function(){
            if(!this.checkValidity()){
                this.classList.add('error');                
            } else {
                this.classList.remove('error');
                hideValidationHint(this);
            }
        })
    })

    form.addEventListener('submit', function(e){
        e.preventDefault();

        if(checkForErrors(inputs)){
            console.log('zgoda');
        }
    })
}