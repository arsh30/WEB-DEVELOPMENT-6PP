// what is js ?
// sol) It is programing language, that provides the logic to our website
//     and it convert static website into dynamic website
//     It can manipulate , validate data

// alert("I m arshdeep");

// console.log("Arshdeep Singh"); //-> console.log -> To print something

// 1. VARIABLES ----------------------

let x = 120;
x = 10;
console.log(x); // x is a variable Name ie a container -> usme value store hogyi
// let -> 1. reInitialise of variable is possible
// 2. redeclare is not posible eg: let x = 10;
// 3. block scope

const y = 20;
console.log(y);
// const -> 1. re-declare  is Not possible because it is constant variable
// 2.  reinitialise is Not possible because it is constant variable

var z = 30;
console.log(z);
// 1. let and var both are same ->
// 2. It is functional scope
// 3. re-declare and reinitialise is possible

// 2. RULES OF CREATING VARIABLES
/*
1) Variable name should start with letter, _ , $
2) They are case sensitive [means small and capital both are diff]
3) they can not contain spaces and special characters

*/

// 3. DATA TYPES -> Means varible name jo hai usme konse type ki value store krre hai
/*
1) number - 1
2) boolean - true or false
3) string -> "abc"
4) undefined -> means kuch assign nahi krra sirf variable create krra

*/

// typeof operator -> means yeh btaega ki konse type ki value store hogi uss variable me
// ie DATA TYPE

let a = 12.3;
console.log(typeof a); // number

let b = "arsh";
console.log(typeof b); // string

let c = true;
console.log(typeof c); // boolean

let d;
console.log(typeof d); // undefined -> means not assign any value only declare the variabe

// SOME METHODS->
/*
1) String + number = string concat
2) number - string => Number
3) string - string = NaN [not a number]
4) string + string = string concat
5) boolean + boolean -> if true = 1, false 0 
*/

let name = "Arshdeep";
let lName = "Singh";
console.log("my name is " + name + lName + ".");
console.log(`My name is ${name} ${lName}.`); // Template litrals, mostly used this

// use let, const instead of var
// use template literals
