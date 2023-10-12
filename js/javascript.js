var celcius
var fahrenheit
var hasil

const konvButton = document.getElementById('button-konversi')
const resetButton = document.getElementById('button-reset')
const reverseButton = document.getElementById('button-reverse') 

konvButton.addEventListener('click',function(){
    celcius = document.getElementById('celcius-input-field').value
    hasil = Number(celcius * (9/5) + 32);
    document.getElementById('fahrenheit-output-field').value = hasil
    document.getElementById('kalkulasi').value = celcius + "C * (9/5) + 32 = " + hasil + " F"
})

resetButton.addEventListener('click',function(){
    document.getElementById('fahrenheit-output-field').value = ""
    document.getElementById('celcius-input-field').value = ""
    document.getElementById('kalkulasi').value = ""  
})

reverseButton.addEventListener('click',function(){
    fahrenheit = document.getElementById('fahrenheit-output-field').value
    hasil = Number((fahrenheit - 32) * 5/9);
    document.getElementById('celcius-input-field').value = hasil
    document.getElementById('kalkulasi').value = "( " + fahrenheit + "F - 32) * 5/9 = " + hasil + " C"
})



