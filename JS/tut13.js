const btn = document.querySelector("button");

const printName = (name, name2) => {
  console.log(`welcome, ${name} ${name2}`);
};

const customTime = setTimeout(printName, 5000, "Arsh", "Simran"); // NOTE -> JO param hote hai
// vo 3rd argument me jaate h

// btn.addEventListener("click", () => {
//   clearTimeout(customTime); // isme id pass krni h jo  settime out kuch return krega vo pass krege
// });

// SETINTERVAL ---------------
const printCount = (name) => {
  console.log(name);
};
const id = setInterval(printCount, 2000, "ARSH");

btn.addEventListener("click", () => {
  clearInterval(id);
});
