// function and scoping

// IMPORTANCE OF FUNCTION
// Function -> isko first declare krege and then call krege tb chlega andr ka execution

// So kuch bhi agr perform krwana hai toh uska function create krlo
// useful in code repetition.

// function printTheValue() {
//   let res = (23 * 10 + 23 * 10 + 23 * 10) / 10;
//   res = res * 2 * 10;
//   console.log(res);
//   res = res / 20;
//   console.log(res);
// }
// abhi kuch print nhi kra, so function create krne ke baad call krna neccesary hai tb uske andr ka code chlega
// code repeition se bch gye call bar bar kr skte hai

// printTheValue();
// printTheValue();
// printTheValue();

// B) Agr humne variables bhjne ho means un hi value ko calculate kre
// to we use function parameter

// c = default value -> agr koi value nhi hai toh yeh c ki 10 assign hijegi
// function printTheValue(a, b, c = 10) {
//   // bracket wale are input paramters
//   let res = (a * 10 + b * 10 + c * 10) / 10;
//   console.log(res);
// }
// printTheValue(45, 45, 45);

// ANONYMOUS FUNCTION -> jis function ka koi name nhi h
// let myFun = function (a, b, c = 10) {
//   // bracket wale are input paramters
//   let res = (a * 10 + b * 10 + c * 10) / 10;
//   //   console.log(res); // agr console na krte to return krte
//   return res; // agr kuch kra hai return to jidr call krra hai udr catch bhi krege
// };

// console.log(myFun(10, 45, 45));

// Function -> JO kuch return nhi krta toh usme khud console krege
// function intro(name='arsh') { // default parameter
//   console.log(`Hi my name is ${name}`);
// }

// intro('arshdeep');

// Q) FUNCTION of total Sum of Array
function sumOfArray(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(`The sum is ${sumOfArray([1, 2, 3, 4, 5])}`);
// ---------------FINISH-------------------------