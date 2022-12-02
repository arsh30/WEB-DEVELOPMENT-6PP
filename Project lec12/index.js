const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

// const tasks = []; // ARRAY OF OBJECTS, ME STORE KRTE JAEGE

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

console.log(tasks);

showAllTasks(); // Load hote hi ik bar call krege
function showAllTasks() {
  // sare array pr loop krega task wala div create krega
  tasks.map((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");
    btn.innerText = "-";

    btn.addEventListener("click", () => {
      removeTasks(); // phle sare remove kro
      tasks.splice(index, 1); // splcie is used to delete
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAllTasks(); //After deleting showing all task
    });
    div.append(btn);

    //   Last thing
    container.append(div); // task div
  });
}

const removeTasks = () => {
  tasks.forEach((value) => {
    //   WE ARE REMOVING ALL RENDERED
    const div = document.querySelector(".task");
    div.remove();
  });
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks(); // Ye isliye pehel kra agr nhi krte toh dhundta
  // or aisa koi div hai hi nahi

  tasks.push({
    title: title.value,
    description: description.value,
  });

  //Jese hi form submit ho tb add hojega
  localStorage.setItem("tasks", JSON.stringify(tasks));

  showAllTasks();
  console.log(tasks);
});
