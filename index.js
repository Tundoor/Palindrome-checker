let textInput = document.getElementById('text-input');
let submitButton = document.getElementById('check-btn');
let result = document.getElementById('result');

submitButton.addEventListener('click', () => {
    if (textInput.value === "" || textInput.value === " "){
        alert('Please Enter A Value')
    }
}) 