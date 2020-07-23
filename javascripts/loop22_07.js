'use strict';

//while loop

let n = 0;

while (n < 3) {
  n++;
}

console.log('The value of n : '+n);

//Do-While loop

let text = ''
let i = 0
do {
  text = text + 'The number is' + i
  i++
}
while (i < 5)

console.log('The do-while excuate '+ text);

// Do-while loop 

let result = ''
let x = 0

do {
  x = x + 1
  result = result + x
} while (x < 5);

console.log(result)

//switch_case
function myFunction() {
    let day
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday"
        break
      case 1:
        day = "Monday"
        break
      case 2:
        day = "Tuesday"
        break
      case 3:
        day = "Wednesday"
        break
      case 4:
        day = "Thursday"
        break
      case 5:
        day = "Friday"
        break
      case  6:
        day = "Saturday"
        break
      default:
        day = "Unknown Day"
    }
    return day
}
//  let a = myFunction()
//   console.log(`Today is ${a}`)


console.log('Today is ' + myFunction())


//Findout
console.log('-----------FindOut----------')
let dog = ['Bob', 'Willy', 'wini'];
dog.shift();
console.log(dog)

let cats = ['Bob'];
cats.unshift('Willy');
cats.unshift('Puff', 'George'); 
console.log(cats2)