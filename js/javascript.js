var celcius
var fahrenheit
var hasil

const konvButton = document.getElementById('konversi')
const resetButton = document.getElementById('reset')
const reverseButton = document.getElementById('reverse') 

konvButton.addEventListener('click',function(){
    celcius = document.getElementById('celcius').value
    hasil = Number(celcius * (9/5) + 32);
    document.getElementById('farenheit').value = hasil
    document.getElementById('kalkulasi').value = celcius + " * (9/5) + 32 = " + hasil
})

resetButton.addEventListener('click',function(){
    document.getElementById('farenheit').value = ""
    document.getElementById('celcius').value = ""
    document.getElementById('kalkulasi').value = ""  
})

reverseButton.addEventListener('click',function(){
    fahrenheit = document.getElementById('farenheit').value
    hasil = Number((fahrenheit - 32) * 5/9);
    document.getElementById('celcius').value = hasil
    document.getElementById('kalkulasi').value = "( " + fahrenheit + " - 32) * 5/9 = " + hasil
})



