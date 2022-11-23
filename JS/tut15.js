/* 
class Myclass {  // BETTER WAY TO USE, INSTEAD OF FUNCTION CONSTRUCTOR
  a = 20;
  b = 30;
}

// object are instance of a classes

const obj1 = new Myclass();
console.log(obj1); // object create hojega

// /we learnt in prvs video, object with function constructor
function Myclass1(val1, val2) {
  this.a = val1;
  this.b = val2;
}
const obj2 = new Myclass1(200, 200); BOTH ARE SAME
console.log(obj2);
*/

// HOW TO DYNAMICALLY PASS THE VALUES

/*
class Myclass {
  #a = 30; // # is used to make private variables, class ke bhar access nahi kr skte
  #b = 20;
  constructor(val1, val2) {
    // isse hum dynamic pass kr skte
    this.#a = val1;
    this.#b = val2;
  }

  print() {
    console.log(` I AM PRINTING`, this.#a);
  }
}

const obj1 = new Myclass(30, 212);

console.log(obj1.print());
*/