let textInput = document.getElementById('text-input');
let submitButton = document.getElementById('check-btn');
let result = document.getElementById('result');

submitButton.addEventListener('click', () => {
    event.preventDefault()

    if (textInput.value === "" || textInput.value === " "){
        alert('Please Enter A Value')
    }
   let textInput1 = textInput.value.toLowerCase().replace(/\s+/g, '')
   let originalWord = textInput1.split('').join('')
   let reversedWord =  textInput1.split('').reverse().join('')
   
   if ( originalWord === reversedWord) {
      console.log("It Works")
   } else {
    console.log("It don't work")
   }
       
}) 

