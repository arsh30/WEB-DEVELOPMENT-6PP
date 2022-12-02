// VERY IMP EXECUTION CONTEXT, HOW JS WORK

/*
1) Behaviour of JS? 
sol) JS is a single thread programming language, Means 1 time pr 1 hi work execute ho 
    skta hai, means sycronously work krti hai

2) STACK -> 
sol) - 1) LIFO - Last in first out
    - say execution call stack ->  stack same LIFO ki trh hi rhega, so iske andr 
    execution context jaege 1 1 krke, 
   1)  execution context means jbhi kisi function ko
    call krte hai to uska khud ka execution context create hota h

   2) jese call hoga function, toh uska 1 xecution context create hoga and vo stack
    me jaega, so func2 ko call krte hai, toh uske liye 1 alag context create hojega
    and func3 ko call krte hai toh uske liye alag create hojega context 

    3) jese func3 ka work complete hua toh vo execution stack se hat jaega then
    func2 ka jese work khtm hua toh vo execution stack se hat jaega so on

    4) NOTE -> Jo sbse pehle wala hota hai, jese hi script add kregi toh ye bydefault 
    hoga ie Global execution Context

    ----------------

    NOTE -> We have two phases in GEC (global execution context)
    1) creation phase, 2) execution phase

    ex: 
    var i = 10; // Global 
    var j = 20;

    function sum(a,b){ // Global - this is also global
    var c = a + b;
    return c;
    }

    var result = sum (i,j);

so in Creation phase or phase1,[ sare variable ko memory allocate hoti hai] -> we have 
    i = undefined , 
    j = undefined, 
    sum = function as it is aajega but run nhi hoga vo
    result = undefined;

    Now creation phase comlete , ab memory dega sabko1 by 1 

    i = 10;
    j = 20;
    sum : {} function declare or kuch execute nahi hua
    result: sum(i,j); // idr function call hori hai

    so jese hi function call hua , toh GEC ke upr aaya Sum funcion ka -> EXECUTION STACK

   - so sum function ka bhi GEC ke 2 phase honge creation phase, and execution phase
   a:undefined
   b:undefined
   c:undefined;

   phase2 - execution phase
   a=10;
   b=15;
   c=25;

   jese sare function execute hojega to execution stack se remove hojega



JBHI EXECUTION CONTEXT CREATE ME KOI FUNCTION JAEGA TO AISE RUN HOGA BELOW:

1) overall we creation phase- Jo bhi variable create hote hai, VO GEC me hote
2) Then execution phase

------------------------------------------------
*/

/*
EX: OVERALL BRIEF EXAMPLE
var i = 10;
var j = 15;

console.log("FIRST LOG");

function sum(a, b) {
  var c = a + b;
  return c;
}
var res = sum(i, j);

HOW THE ABOVE CODE WORK 

1.GEC - Global execution context, jo bhi variable hote hai isme hote hai 
Have two phase creation phase, execution phase 

1.1 creation phase - i [jo bhi variable hai unke liye firstly memory allocate hori hai]
                  - j
                  - sum(is andr ke chijo ko ignore krna history, unke liye alag 
                    execution create hoga, but sab code hoga)
                  - result 
                  
1.2) Execution phase[value assign hongi ab]
- i = 10;
- j = 15;
- log(first console log) function call hui, Means iska khud ka execution context bnega
                    call hote hi print krta hai, so kam pura hogya stack se remove;

- Now 83 se 87 tak kuch nhi krna coz sirf function declare kra hai;
- sum() isko call kra, so iske liye new execution context bnega


so sum execution context start -> 
    It also have two phases - 1) creation and 2) execution 
  
1) creation - all  variables initialise
a = undefined;   
b = undefined;   
c = undefined;

2) execution part -> 
2.1) a = 10;
2.2) b = 15;
2.3) log("printin"); iska alag execution context bnega
2.3) c = 25; return c 

so yeh function bhi execution stack se remove hojega 

*/