export function sendData(){
    const form = document.querySelector('.form');
    const elements = form.querySelectorAll('input:not(:disabled), textarea:not(:disabled)');
    const submit = document.querySelector('button');

    // prepare data for sending
    const dataToSend = new FormData();
    elements.forEach(el => {
        dataToSend.append(el.name, el.value);
    })

    // disable 'submit' button until data is sent
    submit.disabled = true;
    submit.classList.add = 'sendingData';
}