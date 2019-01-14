export function sendData(form){
    // prepare data which will be sent
    const data = document.querySelectorAll('input:not(:disabled), textarea:not(:disabled), select:not(:disabled)');
    const dataToBeSent = new FormData();
    data.forEach(el => dataToBeSent.append(el.name, el.value));
    
    // disable submit button to prevent mashing and add loading animation
    const submitBtn = document.querySelector('.button');
    const submitBtnAnimation = submitBtn.querySelector('.dot');
    submitBtn.disabled = true;
    submitBtn.classList.add('sendingData');
    submitBtnAnimation.classList.add('sendingDataAnimation__dot');

    // send data to server

    // uncomment below function call after it is connected with backend script
    // const url = form.getAttribute('action');
    // const method = form.getAttribute('method').toUpperCase();
    
    // fetch(url, {
    //     method: method,
    //     body: dataToBeSent
    // })
    // .then(resp => resp.json())
    // .then(resp => {
    //     submitBtn.disabled = false;
    //     submitBtn.classList.remove('sendingData');
    //     submitBtnAnimation.classList.remove('sendingDataAnimation__dot')
    // })
    // .catch(_ => {
    //     submitBtn.disabled = false;
    //     submitBtn.classList.remove('sendingData');
    //     submitBtnAnimation.classList.remove('sendingDataAnimation__dot')
    // })

    // NEXT: write backend script to handle data serverside
    // NEXT: prepare function to handle errors
}