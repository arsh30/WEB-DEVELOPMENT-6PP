// dom maniulation -> vvv imp

/*
jo index.html me element bnae hai vo sare hum isse change kr skte hai

*/

// WAYS TO ACCESS THE DATA
// console.log(document.body); // body me jo jo hai vo sab mil jaega
// console.log(document.head); // head me jo jo hai vo sab mil jaega

// console.log(document.body.firstChild); // -> first child yeh spaces bhi count krta hai

// console.log(document.body.firstElementChild); // -> Agr body ke andr first child  elem ko access krna hai

// console.log(document.body.childNodes); // -> isse sare element aajege body me jo jo hai including spaces and element

// console.log(document.body.children); // isse sare children milege, div div, script

// NOTE -> YEH JO RETURN HUA HTML COLLECTION RETURN HORI HOGI INSE WHICH LOOKS A ARRAY
// BUT ARRAY HOTA NHI HAI
// EG:

// const arr = document.body.children;
// console.log(arr); // isse dot lgane pr method aajate h but aayege nhi kyuki yeh array nahi h

// // WE CAN CONVERT TO THE ARRAY
// // EG:

// const newArr = Array.from(arr); // from -> ise convert hojata hai array me
// console.log(newArr);

// ---------------- BELOW ARE BEST METHOD TO TARGET THE ELEMENT -------

// *** AND AGR ACCESS KRNA HAI ID CLASS DEKR UNKO TARGET KR SKTE HAI, TRY KR HAR ELEM KO ID AND CLASS DEDO , class hum mulitple de skte hai but id puri usme 1 hi hogi // ***

// console.log(document.getElementById("first"));
// console.log(document.getElementsByClassName("second")); // it return html collection

// console.log(document.getElementsByClassName("second")[0]); //-> 2 div aaajege but humko sirf first wala chaiye

// AGR INPUT Tag me name field h vo fetch krna ho
// document.getElementsByName("jis name se di h");
// document.getElementsByName("jis name se di h")[0]; // ise 0 index wala milega

// document.getElementsByTagName("span");
// eg: to fetch and manupulation in  html
const thisOne = document.getElementsByTagName("span");
// thisOne[0].innerHTML = "<span className='hello'>Whats upp</span>";
// thisOne[0].style.backgroundColor = "red";
thisOne[0].style.font = "100 1.5rem 'Roboto'";

const btn = document.getElementById("btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// const btn = document.querySelector(".first");
// // btn.style.borderRadius = "2px solid red";

console.log(btn.getAttribute("id"));
console.log(btn.getAttribute("class")); // jo value hogi vo dedega
console.log(btn.setAttribute("class", "thisisbtn"));

const h2 = document.createElement("h2");
// h2.innerText = "HEYLO BAIEBY";
// h2.textContent = "YOUR Arsh";

const myText = document.createTextNode("sample text");
h2.append(myText);
document.querySelector("body").append(h2);

// NOTE -> YE SAB IDR KAR HI KYU RHE H, YEH SAB FUNCTION ME KREGE
function bringMYHeading() {
  const h2 = document.createElement("h2");
  const myText = document.createTextNode("function baieby");
  h2.append(myText);
  document.querySelector("body").append(h2);
}
// Agr koi btn pr click kre toh aaye

// Or we can write - BEST PRACTICE, jb js me event denge toh call
// nhi krege
btn.onclick = bringMYHeading;

const mybtns = document.querySelectorAll("button");
// Pehle catch krke dekhege kispr apply krna h
// console.log(mybtns[1]);
mybtns[1].onclick = bringMYHeading; // Idr call krne ki need nhi h , jb html me likhege tb
// call krte hai

// ------------------

function deleteHeading() {
  h2.remove(); // ye element hi khtm
}
const myBtns = document.querySelectorAll("button");
// console.log(myBtns[1]);
myBtns[1].onclick = deleteHeading;
