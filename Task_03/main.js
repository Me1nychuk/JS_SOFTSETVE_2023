let numeric = +prompt("Enter the numeric (0-9)");

switch (numeric) {
    case 0:
        alert(")");
        break;
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
    default:
        break;
}

//=================================================

let leap_year = +prompt("Enter the year");

alert(`This year is ${(leap_year%4==0 &&  leap_year%100!=0) ? "a leap year" :( leap_year%400==0 )? "a leap year" :"not a leap year"}!`);

//=================================================

  let day = +prompt("Enter the day");
  let month = +prompt("Enter the month ")-1;
  let year = +prompt("Enter the year");
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  if (day < daysInMonth) {
    day++;
  } else {
    day = 1;
    if (month < 11) {
      month++;
    } else {
      month = 0;
      year++;
    }
  }

  let date = new Date(year, month, day);
  alert(date);

//=================================================

let start = parseInt(prompt('Enter the starting value of the range:'));
let end = parseInt(prompt('Enter the end value of the range'));
sum = 0*1;

for ( i = start; i <= end; i++) {
    sum += i;
}

alert(`The sum of all numbers in the range from ${start} to ${end} is equal to ${sum}`);

//=================================================

let num = prompt('Enter the numeric:');
let count = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] >= '0' && num[i] <= '9') {
    count++;
  }
}

alert(`The number of numbers is equal to - ${count}`);

//=================================================

let input; 
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let index = 0; index < 10; index++) {
   input = parseInt(prompt(`Enter numeric №${index+1} `));

   (input < 0) ? negative++ : (input > 0 ) ? positive++ : zero;
   (input%2===0) ? even++ : odd++;
    
}

alert(`positive = ${positive}\n negative = ${negative}\n zero = ${zero}\n even = ${even}\n odd = ${odd}`)

//=================================================

let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let currentDayIndex = new Date().getDay(); // Отримуємо індекс поточного дня тижня
let showNextDay = true;

while (showNextDay) {
  let currentDay = daysOfWeek[currentDayIndex];
  let message = `${currentDay}. Do you want to see the next day?`;

  showNextDay = confirm(message); 

  currentDayIndex = (currentDayIndex + 1) % 7; 
}
