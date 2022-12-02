// Project 1 -> Paragenerator
/*
 Jese Gnerate pr click kre toh JS se input box ki value fetch krlege
 eg: 200 Then jo p tag hai ik p tag bnaege jisme class add krdege
 paras
*/

let input = document.querySelector("#numOfWords");
// input.innerHTML = 123;

const container = document.querySelector(".container");

const generateWord = (n) => {
  // It generate 1 word
  let text = "";
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; i++) {
    // text += letter[i]; // n = 5; ABCDE
    text += letter[(Math.random() * (letter.length - 1)).toFixed(0)];
    // toFixed method -> jo point me ara tha vo nhi aayega
    // letter.length - 1; means 0 to 25 tak word hai unhi me se aayege
    // letter.length krtwe to undefined bhi aata
  }

  return text;
};

// console.log(generateWord(5));

const generatePara = () => {
  const numOfWords = Number(input.value);
  //   console.log(numOfWords);

  const para = document.createElement("p");

  let data = "";

  for (let i = 0; i < numOfWords; i++) {
    const randomeNumber = (Math.random() * 15).toFixed(0);
    // console.log(randomeNumber);
    // 15 length tk ka number lega
    data += generateWord(randomeNumber).toLowerCase();
    data += " "; // Taki word me space aaje
  }

  para.setAttribute("class", "paras"); // taki css prop miljaye
  para.innerText = data;

  container.append(para);
};
