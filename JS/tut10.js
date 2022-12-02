// MATH OBJECT

/*
console.log(Math.round(4.4)); // op 4
// [round -> means agr < 0.5 greater hai toh next integer dega and less hai
// toh prvs wala ]

console.log(Math.floor(4.8)); // op - 4
// It return the floor value means only Integer part

console.log(Math.ceil(4.2)); // op 15
// It return the integer part of the next value

console.log(Math.trunc(4.8)); // op 4
// It removes the precision part

console.log(Math.pow(2, 3)); // op 2 ^ 3 -> 2*2*2 -> 8
// It gives the power

console.log(Math.sqrt(25)); // op -> 5
// It gives the sqrt value

console.log(Math.abs(-25)); // op 25
// It gives the positive value whether the number is positive or negative
// It gives only positive value

console.log(Math.sin((30 * Math.PI) / 180));
// Formula to convert into degree -> (degree * 3.14) / 180;
// By default yeh radians me return krta hai

console.log(Math.cos((30 * Math.PI) / 180));

console.log(Math.max(23, 21, 88, 02)); // It gives maximum value

console.log(Math.min(23, 21, 88, 02)); // It gives minimum value

console.log(Math.random() * 10);
// It return the randome value between 0 and 1
// Agr hume chaiye hoti 0 se 10 tak ki to 10 se mulitply krdege

// Eg: agr number chaiye 1 to 6 ke bheech me
console.log(Math.floor(Math.random() * 6 + 1));

console.log(Math.log2(16));
// ye btata hai ki 2 ki kitni power rakhe jisse yeh 256 aaje

console.log(Math.log10(100));
// log10 -> ye check krega ki 10 kitni power rakhe jisse 100 aje
*/
// --------------------------------------------------------------------

// DATE  OBJECT

// const a = new Date(); // ye sirf browser ki hi time check kregi

// const a = new Date(2013, 11, 30);
// Month is also start from 0 to 11, yy mm dd hr min sec
// we can create our date as well

// const a = new Date("Mar 22 2022");

// SO OVERALL 3 WAYS BNADIYE DATE BNANE KE

// const a = new Date(2012);
// Agr 1 parameter pass krege to it give 1970 time, ERROR

const a = new Date();

// console.log(a.getDate()); // It gives today date
// console.log(a.getDay()); // It gives today day, in numbers
// console.log(a.getHours()); It gives current hour
// console.log(a.getFullYear()); // It gives current year
// console.log(a.getMinutes());// It gives current minutes
// console.log(a.getSeconds());// It gives current seconds change hote jaege
// console.log(a.getMilliseconds());
// console.log(a.getTime()); // in mili seconds
// console.log(a.getMonth()); // op 10 ie nov 
