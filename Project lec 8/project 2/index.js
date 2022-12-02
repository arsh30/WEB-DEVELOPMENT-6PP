const zodiac = document.getElementById("zodiac");
const body = document.body;

// body.style.backgroundColor = "red";

const changeBackground = () => {
  //   console.log(zodiac.value); -> isse value acces kr skte hai jo andr likhi

  // COLOR CHOOSE ->Hex color picker google
  switch (zodiac.value) {
    // target jisko krna h: condition
    case "aries":
      body.style.backgroundColor = "#fc0303";
      break;

    case "tarus":
      body.style.backgroundColor = "#03fc6f";
      break;

    case "gemini":
      body.style.backgroundColor = "#fce514";
      break;

    case "cancer":
      body.style.backgroundColor = "#fffcf7";
      break;

    case "leo":
      body.style.backgroundColor = "#3984b3";
      break;

    case "virgo":
      body.style.backgroundColor = "#396cb3";
      break;

    case "libra":
      body.style.backgroundColor = "#9bb339";
      break;

    case "scorpio":
      body.style.backgroundColor = "#b39739";
      break;

    case "sagittarius":
      body.style.backgroundColor = "#173d45";
      break;

    case "capricorn":
      body.style.backgroundColor = "#2f405e";
      break;

    case "aquarius":
      body.style.backgroundColor = "#0b084a";
      break;

    case "pisces":
      body.style.backgroundColor = "#d121c0";
      break;
  }
};
