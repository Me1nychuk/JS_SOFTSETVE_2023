const year = prompt("Enter your year of birth");
alert(`Your age: ${2023 - year}`);
//==========================================================================
let radius = prompt("Enter the radius of the circle");
alert(`Area of a circle: ${(2*Math.PI*radius).toFixed(2)}`);
//==========================================================================
let distanse = prompt("Enter the distance between the 2 points");
let time = prompt("Enter the time you have");
alert(`You have to move with speed - ${(distanse/time).toFixed(2)}`);
//==========================================================================
const  euro = 0.92;
let money = prompt("Enter the dollar amount");
 money *= euro;
alert(`you will get - ${money.toFixed(2)}`); 
//==========================================================================
let amount_of_memory = prompt("Specify the storage volume");
amount_of_memory *= 1024;
alert(`you can download ${(amount_of_memory/820).toFixed(0)} files`)