/*
const printName = (name1, name2) => {
  console.log(`welcome ${name1} & ${name2}`);
};

setTimeout(printName, 4000, "ARSH", "dripti");

// NOTE -> JO FUNCTION ME PARAMTER JATE HAI VO 3RD ARGUMENT SE JAATE HAI
// EG: Function, TimeinMilisecond, Parameter Jo send krne hai Function ko
*/

// ALTERNATE WAY TO WRITE THE ABOVE PART

/*
const customTimeOut = setTimeout(
  (name1, name2) => {
    console.log(`WELCOME ${name1} , ${name2}`);
  },
  5000,
  "ARSH",
  "DRIPTI"
);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // ClearTimeOut krne ke liye hamne jo function bnaya hai setTimeOut
  // Uske kisi variable me catch krege
  // and clearTimeout iske paramter me as a reference denge
  clearTimeout(customTimeOut);
});
*/

// -----------------------------------

// SET INTERVAL

const customTimeInterval = setInterval(
  (name) => {
    console.log(name);
  },
  3000,
  "ARSH"
);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  clearInterval(customTimeInterval);
});

// -------------------------

/*
1) setTimeOut -> It is used to run the function only 1 time

2) setInterval -> The function runs after every interval of time that we given

*/
