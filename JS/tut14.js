// 1) We created Object, Object created using OBJECT LITERALS
// Why it is object? coz this have mulitple properties we can access by using dot
//  jese hi dot likhege to sari properties aajegi means it is object

/*
const a = {
  name: "John",
  age: 30,
};
console.log(a); This is object literal, so agr jbhi .constructor krege to "OBJECT HOGA"
USKA CONSTRUCTOR
console.log(a.name);
console.log(a.age);


Object construcot meaning

const a = new Object({name:john, age:30 }) this is OBJECT CONSTRUCTOR
*/

// 2) NOTE -> Jo object hota hai usko dot lgate to sari property agr aajati hai means
// object hai similarly in JS, Everything is object, string is also object

/*
const a = "HELLO WORLD";
console.log(a.); -> This is also an object, so in javascript everything is a object
*/

// -------REFERENCED DATA TYPE AND PRIMITIVE DATA TYPE-----------------------------------

/*
const a = "helo world";
const b = {
  name: "Arsh",
  printName: () => {
    console.log("DEEP SINGH");
  },
};

// primitive datatypes in js -> number,string,boolean,null,undefined
// primitive data types are immutable -> immutable means we can not be set the value
// again and 3rd diff is this is pass by value

// object are referenced Data Types, means we can add or change the properties at
// run time, means jb jb compile hoga usse pehle hojega,
// and it is passs by referenced

console.log(a);
// WE CAN NOT CHANGE THE VALUE  BCOZ IT IS IMMUTABLE
console.log(a);

// console.log(b);
// b.added = "VALUE IS ADDED";
// console.log(b); ->SO Referenced dataTypes: Means we can add change the value at run time
*/

// --------------------REFERENCED AND PRIMITVIE DATA TYPES IN BRIEF----------------------

// A) PASS BY VALUE DATA TYPE
/*
let a = 21;
let b = a;

console.log(a); // op - 21
console.log(b); // op - 21

// WE CAN CHANGE THE VALUE OF A

a = 20;

console.log(a); // op - 20
console.log(b); // op - 21 bcoz upr b ki value assign ho chuki hai ik baar, and dubara
// change nahi hui, and it is also pass by value

*/

// b) PASS BY REFRENCE

/*
let a = {
  name: "arsh",
  age: 23,
};

const b = a;

console.log(a);
console.log(b);

a.name = "CHANGED";
console.log(a);
console.log(b); // So idr b ki value bhi changed hogyi but upr nhi hui thi bcz it is
// pas by referenced, so agr b ki bhi krege to a ki bhi hojegi

*/

// -------------- OBJECTS----------------------

// So agr 10 obejct hote, to sabme change krna hota
/*
const human = {
  weight: 265,
  height: 185,
  quote: () => {
    console.log(`ROMAN REIGN WEIGHT`);
  },
};

const johnCena = {
  weight: 165,
  height: 145,
  quote: () => {
    console.log(`JOHN CENA WEIGHT`);
  },
};
*/

// So, instead of this, we make a template, template is basically jisme value pass kre
// or hame mil jaye, eg: make wwesuperstar template, so we can make multiple wrestlers

// 1ST WAY -> FACTORY FUNCTION
/*
function wwesuperstar(a, b, quote) {
  return {
    weight: a,
    height: b,
    quote: () => {
      console.log(quote);
    },
  };
}

let romanReigns = wwesuperstar(265, 185, "HEAD OF TABLE");
let sethRollins = wwesuperstar(225, 185, "Burn it down");
console.log(romanReigns);
console.log(sethRollins);


// So, aise hi object template bnalege, agr100 oject bhi bnane honge, to vo hum bna skte
// hai 
*/

// 2ND WAY -> To make Object template - using constructor

// Make 1st letter of the function should be in capital
// this -> means it is pointing to the current obejct

/*
function Star(weight, height) {
  this.weight = weight;
  this.height = height;
}

const romanReigns = new Star(265, 185);
console.log(romanReigns);
// romanReigns.quote = "Head of the table"; we can set the value
console.log(romanReigns.constructor);
// .constructor -> isse koi bhi object ho vo miljaega jisse ye object bna hai, so
//  Star function miljaega jisse ye roman reign bna hai



OVERALL, IN JAVASCRIPT, EVERYTHING IS OBJECT

*/
// --------------------------EXAMPLE OF GAME ---------------

/*
function Enemy(size, speed) {
  this.size = size;
  this.speed = speed;
}

const Enemy1 = new Enemy(265, 185);

// suppose 20 Enemy create krne hai, to kya baar baar new Enemy likhege, No loop
// chla denge

const enemies = [];

for (let i = 0; i < 20; i++) {
  enemies.push(new Enemy(Math.floor(Math.random() * 20), 21));
}

console.log(enemies);
*/

// ---------------------------------------------------------
// SPREAD OPERATOR

// function Hero(size, speed) {
//   this.size = size;
//   this.speed = speed;
// }

// const ironMan = new Hero(10, 20);
// const ironMan2 = { ...ironMan, added: true };

// console.log(ironMan);
// console.log(ironMan2);

// ironMan2.size = 23; // hum srf iski property change krna chahte hai
// toh koi aisa way hai jisse primitve jese ki value copy hoje but link na ho

// console.log(ironMan);
// console.log(ironMan2);

//  spreadOperator ... , comma lgakr or element add kr skte hai , and update bhi hojega
// jo preves hoga

// const arr = [1, 2323, 323, 2];
// const newArr = new Array(...arr);
// newArr.push(505, 50505);
// console.log(arr); // now both the values are diff
// console.log(newArr);
