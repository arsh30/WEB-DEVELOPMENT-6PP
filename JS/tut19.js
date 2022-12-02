// promises -> It is object in javascript, with the help of this, we can achieve async
// behaviour either the promises resolve or reject, initally in pending state
// It is the extensive part of callback hell
// we use .then - if promise resolve
// we use .catch(()=>{} ) , if promise reject

// finally -> means promise return hua vo chahe kuch bhi ho, eithere resolve or reject
// Finally block will always run

/*
const a = new Promise((resolve, reject) => {
  //   resolve("promise fullfilled");
  reject("some error");
  //    reject -> reject it gives error when the promise is not fullfilled
});
a.then((parameter) => {
  // .then execute, when the condition resolves
  console.log(parameter);
}).catch(() => {
  console.log("ERROR");
});
*/

const arr = [];
const fetchData = (arr = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   arr.push({ name: "ARSH" });
      if (arr.length > 0) resolve("DATA FETCHED");
      else reject("some tech error");
    }, 3000);
  });
};

fetchData(arr)
  .then((message) => {
    console.log(message);
  })
  .catch(() => {
    console.log("error");
  })
  .finally(() => {
    console.log("WILL WORK TOGETHER");
  });
