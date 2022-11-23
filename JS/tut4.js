// ARRAYS
// array -> collection of similar number of data
// eg: 1 variable bnaya jisme muliple same type ki values store kr skte hai

// In js kuch bhi store kr skte hai like string,number, boolean

// NOTE -> JS EVERYTHING IS OBJECT MEANS REFERENCE VARIABLE JO CHANGE KREGE ORIGINAL ARRAY ME REFLECT HOGA
// LIKE ARRAY, OBJECTS, NULL

// let arr = [12, "Arsh", false, [1, 2]];
// console.log(arr);
// console.log(arr[3]); // -> [idx num] -> to get the element on that access
// arr[1] = 12; // update kri value -> means value add aise bhi kar skte hai

// ARRAY METHOD
/**
 1) Push -> ye array ke last me add krta hai
 2) pop -> ye delete krta hai hmesha last element ko
 3) shift -> remove first element
 4) unshift -> it add at first position
 5) splice method (startIdx, kitne element delete krne hai continue me)-> work on bigger arrays
 6) reverse() -> reverse the array
 7) slice(startIdx, jonsa idx  tak chaiye) -> it return the new array vo element honge isme jo hame chaiye, ending idx is not included
 
 8) includes("search element") -> It return true or false like in STRINGS,
 9) length -> arr.length()
 */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let newArr = arr.slice(2, 5);
// console.log(arr);
// console.log(newArr);
// Data type of array is object -> ye reference type pr bnta hai to pure array me change hota hai

// LOOPS -------->

// Insert 50 element in an array
// let arr = [];
// for (let i = 1; i <= 50; i++) {
// arr.push("abhi"); // yeh 10 aar name add krdega
//   arr.push(i);
// }
// console.log(arr);

// Interview ques -> const variable ko redecare ni kr skte but array ke jo khud ke method hai uski help se change krre hai value

// const arr1 = [];
// arr1.push(10);
// arr1.push(20);
// console.log(arr1);

// ---------------------------------------------------------------------------

// OBJECTS
// Array is also object, Objects are referenced type variables
// Object ke andr agr propertie access kni hai toh dot krke access krege

const myObj = {
  name: "Arsh",
  lname: "singh",
  income: 123,
};

console.log(myObj);
console.log(myObj.lname); // -> It gives the value of lname

myObj.name = "Arshdeep"; // set the object to the new name
myObj.gender = "male"; // adding new propertie to the object
console.log(myObj);

// -------------- FINISH -------------

