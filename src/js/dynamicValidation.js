import { checkValidity } from './checkValidity.js';
import { sendData } from './sendData.js';

export function dynamicValidation(){
    const form = document.querySelector('.form');
    const inputs = form.querySelectorAll('input[required], input[type=radio], textarea[required]');

    // disable default validation
    form.setAttribute('novalidate', true);
    
    //  check if every element is correct according to given pattern
    inputs.forEach(input => {
        input.addEventListener('input', function(){
            if(!this.checkValidity()){
                this.classList.add('error');

            } else{
                this.classList.remove('error');
            }
        })
    });

    // after pressing 'submit' check if everything is correct again
     form.addEventListener('submit', e=>{
        e.preventDefault();

        if(checkValidity(inputs)){
            sendData();
        }
    })
}