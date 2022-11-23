// LOOPS, IF ELSE, WHILE DO WHILE

//Arithmatic OPERATORS
// +,-,*,/,%
// % iT GIVES Remainder

// COMPARISON OPERATORS -> Jo compare ke liye use hote hai, It give true or false
// == -> It give true or false
// >, < , >= , <= , !=

// == -> means we only compare the value chahe vo string or number ho
// === , !== -> means It compare the number as well data type of both

// IF ELSE -> agr kal baarish hui to umbrella le jana otherwise t shirt le jana
// Agr condition true hai to if me jaega nah to else wale part me

// let weather = prompt("Type Day");
// let weather = "Summer";
// if (weather === "Rainy") {
//   // teeno me se jo true hogi vo execute hojegi bss
//   console.log("PLease Carry your umbrella");
// } else if (weather === "Summer") {
//   console.log("Wear tshirt");
// } else {
//   console.log("No need to go");
// }

// Switch statement -> Jonse case ki value match hojegi vo statement chl jaegi

let weather = "Rainy";
switch (weather) {
  case "Rainy":
    console.log("Please carry you umbrella");
    break;

  case "Summer":
    console.log("Wear tshirt");
    break;

  default:
    console.log("No need to go");
    break;
}

// LOOPS
// Loops used jb koi kaam bar bar krna ho

// Math.random() -> ye random generate krta hai between 0 to 1

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// let j = 1;
// while (j <= 5) {
//   console.log("HEllo");
//   j++;
// }

//do while -> ik baar to atleast chlta hai then condition check krta
let j = 10;
do {
  console.log("Hello");
  j++;
} while (j <= 5);
