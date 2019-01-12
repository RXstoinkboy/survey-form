import {hideValidationHint, hideCheckboxError} from './toggleValidationHint.js';
import { checkForErrors } from './checkForErrors.js';

export function checkValidity(){
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    const checks = form.querySelectorAll('input[type=checkbox]');
    let checkboxMarked = 0;  

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

    checks.forEach(input => {
        input.addEventListener('click', function(){
            const checkboxFieldset = document.querySelector('.right__experience');
                       
            if(this.checked){
                checkboxMarked++;                    
            } else {
                checkboxMarked--;                    
            }

            if(checkboxMarked !== 0){
                checkboxFieldset.classList.remove('error');
                hideCheckboxError(checkboxMarked);
            } else{
                checkboxFieldset.classList.add('error');
            }
        })
    })

    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(checkForErrors(inputs, checkboxMarked)){
            
            console.log('zgoda');
        }
    })
}