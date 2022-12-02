// EVENT LISTNERS
const heading = document.getElementById("heading");
const box = document.getElementById("box1");
const btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
  // event -> event means kuch hona
  // jese hi ispr click krege to ye event fire hoga
  //   console.log("clicked");
  //   box.style.backgroundColor = "red";
  //nOTE-> agr jyda properties deni hai to bnakr rakh lenge
  // koi class Name

  box.classList.add("classForDiv");
  // classList to add class, or we can set Attribute
});

box.addEventListener("mouseover", () => {
  btn.style.transform = "scale(1.1)";
  heading.style.backgroundColor = "pink";
});

box.addEventListener("mouseout", () => {
  btn.style.backgroundColor = " ";
});

// NOTE -> 1 hi elem pr jitne mrji event listner lga skte hai
// e.preventDefault() -> jo bydefault behaviour hota hai elem ka vo bnd
// hojata hai

btn.addEventListener("contextmenu", (e) => {
  // Context menu - means right click krna, isse inspect wala option hora
  // heading, so usko prevent default krdege
  e.preventDefault();
  btn.style.backgroundColor = "purple";

  box.removeEventListener("mouseover");
  // 2nd parater me ye btana hai konsa remoe krna hai
});

function func1() {
  
}
box.addEventListener("mouseover", func1);
// -------------------------------

// Agr we want ki pure website pr click kre toh inspect wala menu na open ho
// so, hum direct apply krege addEventListener
// ye event listner jo hai browser ka part hai

// addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   btn.style.filter = "blur(1px)";
// });

addEventListener("click", (e) => {
  // Means for Mouse coordinates
  console.log(e.clientX); // Means X -> yeh x axis ki coordinates hai
  console.log(e.clientY); // means Y ki cordinate ki mouse kidr present hai
});

// EVENT LISTNER FOR ENTER
addEventListener("keypress", (e) => {
  if (e.key === "Enter") box.style.backgroundColor = "orange";
});

// ---------------------------------------
// for input tag

const input = document.querySelector("input");
input.addEventListener("change", (e) => {
  // jese andr ki value change hogi to print hojegi
  console.log(e.target.value); // isse value access kr skte hai
});

// ----------------------------------------
