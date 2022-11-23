// ARRAYS METHOD ------------>

// 1) Arrow Function

const funcName = (a, b) => {
  console.log(a * b);
};

funcName(3, 5);

/*
Difference between normal function and arrow function 

 normal function -> 
1) means we can access before initialisation

 arrow function -> 
1) we can not use  function before initialisation
*/

// ------------------------->

// 2 ARRAYS ADVANCE METHOD -> Jisme function use hote h, Arrow func

/*
const arr = [2, 4, 16, 8, 10];
const myFun = (currElem, index) => {
  if (currElem > 4) {
    return currElem;
  }
};
let result = arr.find(myFun);

*/
// find Methd - basically iterates over the array
// It takes a Callback function

// *** -> find method return an element found if exist other wise return nothing, basically it returns only one element  and it is used
// for 'delete'

// console.log(result);

// ----------------------------

// 2.2) FILTER
// Filter it basically return the new array containing all the elements
// which satisfies the condition

/*
const arr = [2, 4, 6, 8, 10];
const result = arr.filter((currElem, index) => {
  return currElem > 4;
});
console.log(result); op -> [4,6,8]

*/

// -------------------------------------

// arr.every(() => { bascially it return true agr array me sare elem
// satifies krte hai condition });

// arr.some(() => {basically it return true agr kuch elem satisfie krte hai
// condition})

// -------------------------------------

// 3) FOR OF LOOP -> It gives all the element present in the array
// It does not reflect the original array

/*
const arr = [2, 4, 6, 8, 10];
for (let elem of arr) {
  elem += 2;
  console.log(elem);
}

console.log(arr);
*/

// 4) FOR IN LOOP -> It gives all the index of the array

/*
const arr = [2, 4, 6, 8, 10];
for (let elem in arr) {
  console.log(elem);
}
*/

// 5) FOR EACH LOOP -> It does not change the original Array
// It is used to travel the array, It only apply the loop

/*
const arr = [2, 4, 6, 8, 10];
let totalSum = 0;
arr.forEach((elem, index) => {
  elem += 2;
  console.log(elem);
});

console.log(arr);
*/

// -------------------------------------------

// 6) Map -> It is same as foreach loop, But it return the new Array
// It also does not change the original
// used to travel on Array, Access only forward

/*
const arr = [2, 4, 6, 8, 10];
let res = arr.map((elem) => {
  return elem + 2;
});
console.log(res);
*/

// ----------------------------------------------------------

// 7) Reduce Method

// It is similar to Map but there is a one difference
// Map return whole array but Reduce method return only one value
// like in arr.find method
// It start the loop from 1st index, acc me 0 index value store rhegi
// It is used to flatten the array and gives a single result

const arr = [2, 4, 6, 8, 10];
const res = arr.reduce((acc, elem, index) => {
  // acc starting value is (prev ) 2,
  return acc + elem; // It gives sum
});

console.log(res);
