/* 
class Myclass {  // BETTER WAY TO USE, INSTEAD OF FUNCTION CONSTRUCTOR
  a = 20;
  b = 30;
}

// object are instance of a classes

const obj1 = new Myclass();
console.log(obj1); // object create hojega

// we learnt in prvs video, object with function constructor
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
  #b = 20;// and ye bnane ki bhi need nahi hai, direct constructor me bna skte
  
  constructor(val1, val2) {
    // isse hum dynamic pass kr skte
    this.#a = val1; // this means issi class ki baat krra hai
    this.#b = val2;
  }

  print() {
    console.log(` I AM PRINTING`, this.#a);
  }
}

const obj1 = new Myclass(30, 212);

console.log(obj1.print());
*/

// Eg2
/*
class Myclass {
  #a;
  #b;

  constructor(value1, value2) {
    this.#a = value1;
    this.#b = value2;
  }

  get getData() {
    // Agr humko value chaiye hoti a ki class ke bhaar to we use getter function

    return this.#a;
  }

  set setA(a) {
    this.#a = a;
  }

  set setB(b) {
    this.#b = b;
  }
}

const obj1 = new Myclass(230, 231);
// console.log(obj1.getData);
obj1.setA = 232;
console.log(obj1.getData);

*/

// SO, USE CLASS CONSTRUCTOR, INSTEAD OF FUNCTION CONSTRUCTOR,
// this IS Useing because of inheritance, we can extedn the class
// Eg:

class Electronics {
  #input;
  #output;
  #name;

  constructor(input, output, name) {
    this.#input = input;
    this.#output = output;
    this.#name = name;
  }

  print() {
    console.log(this.#name);
  }
}

// MAKING NEW CLASS, INHERIT FROM FIRST CLASS

class Charger extends Electronics {
  #plugType;

  constructor(input, output, name, plugType) {
    // charo as it is aagyi
    super(input, output, name); // It is constructor of Parent class, so j bhi isme
    // bhjege vo upr wale ko mil jaegi
    this.#plugType = plugType;
  }
}

let hpCharger = new Charger(18, 200, "HP CHARGER", "EURPOEAN");
let hardisk = new Electronics(200, 250, "HP hardisk");
hpCharger.print();
