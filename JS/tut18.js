// CALLBACK FUNCTIONS
/*
function sum(a, b, c) {
  const res = a + b;
  c(res);
}

function displaySum(result) {
  const h1 = document.querySelector("h1");
  h1.innerText = result;
}

sum(10, 30, displaySum); // ARGUMENT ACCEPT HUA A IK HOR FUNCTION
// callback fun -> the function that takes another function as a ARGUMENT
// coz vo baad me call honge
// means aisa functioon jo argument me ik hor function accept kre ie cb function


// HOF -> function which takes anther function as a paramter is a HOF
// eg: Sum bcoz isne 1funciton ko parameter recieve kra hai;
*/

// EG2 ----------------------

/*
const arr = [1, 2, 3, 4, 5, 6];
function calculator(arr = [], callback) {
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    const element = callback(arr[i]);
    ans.push(element);
  }
  console.log(ans);
}

// function calculatorDivideby10(arr = []) {
//   const ans = [];

//   for (let i = 0; i < arr.length; i++) {
//     ans.push(arr[i] / 10);
//   }
//   console.log(ans);
// }

// So, humne bss 1 operator ki vjahse pura logic dubara likha, ie not a good
// so there is a concept DO NOT REPEAT YOURSELF
// calculatorDivideby10(arr);

function multiply(n) {
  return n * 10;
}

function divide(n) {
  return n / 10;
}

calculator(arr, multiply);
calculator(arr, divide);
// pehle left functio complete hoga then 2nd argument wala run hoga
*/

// -----------------------------------------------------------------------

// CALLBACK SYNC AND ASYNC , WE CAN DO BOTH

const gamesList = [];
const game = {};

const fetchData = (callback) => {
  setTimeout(
    (callback) => {
      gamesList.push(
        {
          name: "game1",
          id: "xdadadxa",
        },
        {
          name: "game2",
          id: "CDCDCadadxa",
        },

        {
          name: "game3",
          id: "dcdcdadadxa",
        }
      );
      callback();
      console.log("after fetching", gamesList);
    },
    4000,
    callback
  );
};

const displayGame = () => {
  setTimeout(() => {
    for (let i = 0; i < gamesList.length; i++) {
      const p = document.createElement("p");
      p.innerText = gamesList[i].name;
      document.body.append(p);
    }
    console.log("after displaying");
  }, 1000);
};

// displayGame();

fetchData(displayGame);


// What is Call back hell?
// sol) Means when there are mulitple nested callback function, then this condition is
// called callback hell

// to save from callback function, or callback hell , we have promises