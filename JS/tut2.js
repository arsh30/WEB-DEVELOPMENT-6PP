// Type conversion -> means type casting jis me convert krna hai uske aage vo data type likh kr
// wrap krdo

/*
let a = 56;
console.log(a);
console.log(typeof a); // -> op number
console.log(typeof String(a)); // -> op string -> bcoz string me wrap krdiya hai
// tostring method -> to convert into the string
console.log(a, typeof a.toString());

let b = "454";
console.log(b);
console.log(typeof b);
console.log(typeof Number(b));
*/

// 1) STRING METHODS
/*
1) indexOf -> It gives the first match position
2) lastIndexOf -> It gives the last matched element only 1
3) charAt(idx) -> To access the character of that idx
4) endsWith("pass string") -> agar isse khtm hoti hogi to return true krdega otherwise false
5) includes("pass string") -> Agr pure string me present hogi to return true krega vrna nahi hai toh False
6) substring (start,end); -> start se end tak continue portion dega including space [but ending index not include]
7) slice(start,end) -> slice and substring are almost same
8) split('') -> It return a new array and containing jidr jidr space hogi udr se split krdega
                basically It divide the string into parts

9) replace('kisko krna', 'updated value')
10) length -> It return the length means kitne character present  hai
11) toLowerCase() -> sare lowercase me ajege
12) toUpperCase() -> sare upr case me hojege
13) substr(start,len) -> eg: 0, 4 means 0 se start hokr 4 length tak ki substring dega, alag string return krega


*/

let s = "my name is arshdeep singh";
console.log(s[1]); // To access the chracter -> s[index num jo chaiye]

console.log(s.indexOf("n")); // indexOf -> It gives the index NUMber of n variable, Jo 1st wala milega uska index number dega
console.log(s.indexOf("arshdeep")); // means jidr se ye word start hoga uska address dedega
console.log(s.lastIndexOf("e")); // lastIndexOf -. It gives the last posiiton, jo last se 1 match hoga vo dedega
console.log(s.charAt(11)); // pass the idx number to uss position pr jo character hoga vo dedega
console.log(s.endsWith(" arshdeep singh")); //-> means agr string end hoti hai isse to return true otherwise return false
console.log(s.includes("is"));
console.log(s.substring(0, 4)); // -> means 0 se 4 tak ka portion dedga last index not included
console.log(s.slice(0, 4)); // -> slice -> slice and substring are almost same
console.log(s.split(" ")); // -> It divide into parts
console.log(s.replace("my", "MY"));
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substr(0, 6));
