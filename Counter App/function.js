// Set Default value 
let currentValue=0;
// Get all the html elements by id 
let counterCount=document.getElementById('counter-count');
let btnDecrement= document.getElementById('decrement');
let btnReset= document.getElementById('reset');
let btnIncrement= document.getElementById('increment');

// Increment click function
btnIncrement.addEventListener('click', () =>{
    currentValue++;
    counterCount.textContent = currentValue;
});
// Decrement click function
btnDecrement.addEventListener('click', () =>{
    currentValue--;
    counterCount.textContent = currentValue;
});
// Reset click function
btnReset.addEventListener('click', () =>{
    currentValue=0;
    counterCount.textContent = currentValue;
});