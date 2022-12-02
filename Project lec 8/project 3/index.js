const name = document.getElementById("name");
const tagsContainer = document.querySelector(".tags");

const addName = () => {
  //   console.log(name.value);

  if (name.value === "") {
    return null;
  }

  const tag = document.createElement("div");
  tag.setAttribute("class", "tag"); // coz css prop ispr h

  tag.innerText = `Hey I am ${name.value}`;
  tagsContainer.append(tag);
};
