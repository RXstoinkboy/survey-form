export function sendData(){
    // prepare data which will be sent
    const data = document.querySelectorAll('input:not(:disabled), textarea:not(:disabled), select:not(:disabled)');
    const dataToBeSent = new FormData();
    data.forEach(el => dataToBeSent.append(el.name, el.value));
    
    // disable submit button to prevent mashing and add loading animation
    const submitBtn = document.querySelector('.button');
    submitBtn.disabled = true;
    submitBtn.classList.add('sendingData');
}