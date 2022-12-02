console.log("LOCAL STORAGE ANDSESSION STORAGE ");

const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("deleteBtn");

/*
const btnClick = () => {
  //   alert(input.value); // kyuki event listner btn pr lgare hai na ki input pr
  // input pr lgate to likhte - e.target.value
  // Session storage,
  // jo value likhege vo session storage me store krleege

  sessionStorage.setItem("key1", input.value); // so store krwaliya jo bhi likhre the
  // with the key 1

  // Now ye value set krdi session storage me
  // Now we can use this anywhere
  // Session storage me current tab me hi scope rhega, new tab open krege to usme
  // nhi rhega
  // session storage is a array of objects
};
// if (sessionStorage.getItem("key1")) {
//   alert(sessionStorage.getItem("key1"));
// }

btn.addEventListener("click", btnClick);

deleteBtn.addEventListener("click", () => {
  // sessionStorage.key(0); // 0th index wali mil jaegi
  //   sessionStorage.removeItem("key1");
  sessionStorage.clear(); // remove all item
});

*/

// LOCAL STORAGE------------>
/*
Session storage -> scope is for our current tab, space upto 5mb
Local Storage -> They exist in every tab, even we close our browser 
                it still remains there, local storage can be used as a
                database, space upto 10mb
*/

const btnClick = () => {
  localStorage.setItem("key1", input.value);
  // NOTE -> Isme jbhi store krwate hai toh string ke usme save hoti hai
  // but agr hume object krwana ho  to JSON.stringify( {} );
};

btn.addEventListener("click", btnClick);

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("key1");
});

if (localStorage.getItem("key1")) {
  // Agr wapas object chaiye hota to
  // JSON.Parse(localstorage.getItem("key1")); // isse object me convert
  // hojega wapas
  alert(localStorage.getItem("key1"));
}
