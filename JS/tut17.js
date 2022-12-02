/*
Normally Javascript is a single thread programming language, means line by line execute
hoti hai, syncronous means 1 time pr 1 hi work kr skte 

but in this lec we change the behaviour of JS, by making async 
, async means parallelly we can do 2 or more simultaneously. 


-> We can make JS async, we have 3 ways to make async: 
1) Callabck
2) Promises
3) Async Await 
*/

// Example one

/*
function example(name = "Arsh") {
  return `Wassup I am ${name}`;
}

const result = example();
console.log(result);
*/

// Example 2

// Sync -> pehle pura function complete hua, then last cnsole. me print hua
/*
function example2(name = "arsh") {
  for (let i = 0; i < 20; i++) {
    console.log(`${name}:${Math.random()}`);
  }
}

example2(); // first this execute, jb pura function complete hoga to niche wali chlegi
console.log("LastLine"); // This print in last
*/

// ASYNC -> using callback
function example2() {
  setTimeout((name = "Arsh") => {
    for (let i = 0; i < 20; i++) {
      console.log(`${name}}`);
    }
  }, 4000);
}

example2();
console.log("I am outer func"); // First yeh execute hoga then function bcoz function is
// async , setTimeOut is asyncronous
