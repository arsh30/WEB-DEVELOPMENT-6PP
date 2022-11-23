// OBJECTS - OOPS
/*
const a = {
  name: "John",
  age: 30,
};

//Yeh object jo print hua using object literals, Ye object isliye coz
// isme mulitple prop h - dot lgakr access kr skte h
console.log(a); 
console.log(a.age); 
*/

/*
 NOTE -> IN JS EVERY THING IS OBJECT, so jb dot lgate h sare
  method aate h
 Eg: STRING, Number, boolean, undefined, int - all are primitive 
 but they are immutable

 Objects { } they are referenced datatype means agr kisi me bhi 
 change kro toh pure array me reflect hota hai 
 */

/*
// Reference Data Type object

const a = "hello world";
const b = {
  name: "Arsh",
  printSum: () => {
    console.log("sING");
  },
};

console.log(a);

//REFERENCED DATA TYPE -> means kahin bhi chnage kro pure jgh relfect hoga
console.log(b);

b.added = "VALUE IS ADDED";
console.log(b);
*/

// -----------------------

/*
// TEMPLATE OBJECT -> 2 ND WAY TO CREATE WAY MULITPLE OBJECT
// IK object bnalo temlate ka like a function

// FACTORY FUNCTION
function wweSuperStar(a, b, qoute) {
  return {
    weight: a,
    height: b,
    qoute: () => {
      console.log(qoute);
    },
  };
}

const romanReign = wweSuperStar(200, 100, "SAMPLE BOI");
const sethRollin = wweSuperStar(100, 50, "LOLO BOI");
console.log(romanReign);
console.log(sethRollin);

*/

// -------------------------------

// 3RD USING CONSTRUTOR FUNCTION ---->

/*
function Star(weight, height) {
  // fn name 1st letter is capital
  this.weight = weight; // left side wale variable humne create kre
  this.height = height; // right side wale upr se milre h
}

const roman = new Star(265, 285); // CALLING THE CONSTRUCTOR,
// USING NEW Constructor name
// This -> It refers to an object -> jiske andr hoga uska function
// ki baat krra h means
console.log(roman);

roman.qoute = "BIG DADY";
console.log(roman.constructor); // . constructor -> isse pta lgjaega kise constructor bna h


// FUNCTION,ARRAY,OBJECT BOTH ARE REFERENCED DATATYPES 
*/

// --------------------
// EXAMPLE ->
// suppose humko 100 object bnane h
function Enemy(size, speed) {
  this.size = size;
  this.speed = speed;
}

const Enemy1 = new Enemy(265, 186);
// console.log(Enemy1);
// Creating 100 enemie

const enemies = [];
for (let i = 0; i < 100; i++) {
  enemies.push(new Enemy(Math.random() * 10, Math.random() * 100));
}

console.log(enemies);
