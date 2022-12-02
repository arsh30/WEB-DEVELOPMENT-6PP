// JSON - > It is an object, It is file, that contains multiple Objects
// but in json file -> string must be in double quotes

const url = "http://catfact.ninja/fact";

const fetchData = () => {
  fetch(url).then((data) => {
    console.log(data.json());
  });
};

fetchData();
