const mile = 0.621371;
let km = prompt("Enter the distance");
km *= mile;
alert(` the distance  - ${km}`);
//==============================================

let hours = prompt("Enter the hours")*1;
let minutes = prompt("Enter the minutes")*1;
alert(`Залишилось - ${23 - hours} : ${60 - minutes}`);

//==============================================

const number = prompt("Enter a 3-digit number:");
const ones = number % 10; 
const tens = Math.floor(number / 10) % 10; 
const hundreds = Math.floor(number / 100); 

const reversedNumber = ones * 100 + tens * 10 + hundreds; 

alert(`Reversed number: ${reversedNumber}`);