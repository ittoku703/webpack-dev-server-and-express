const btnSend = document.getElementById('btn-clac');
btnSend.addEventListener('click', (e) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', (e) => {
        if (xhr.status == 200) {
            const result = JSON.parse(xhr.response);
            const resultElement = document.getElementById('result');
            resultElement.value = result.sum;
        }
    });
    xhr.addEventListener('error', (e) => {
        console.error(e);
    });
    xhr.open('POST', 'api/add', true);
    const formElement = document.getElementById('my__form');
    const formData = new FormData(formElement);
    xhr.send(formData);
})