let addBtn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let tasks;
if (!localStorage.getItem("todo")) {
  tasks = [];
} else {
  tasks = getTasks();
}
function creatTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
addBtn.addEventListener("click", (event) => {
  if (input.value == "") {
    event.preventDefault();
    alert("Please Enter A Task");
  } else {
    let text = input.value;
    let task = creatTask(text);
    task.innerHTML += `<span class="absolute right-4 text-xl hidden hover:text-red">
    <i class="fa-solid fa-trash-can"></i>
  </span>`;
    ul.appendChild(task);
    saveTask(text);
    input.value = "";
  }
});
ul.addEventListener("click", (event) => {
  if (event.target.nodeName === "I") {
    let target = event.target.parentElement.parentElement;
    target.style = "display:none";
    let hello = tasks.splice(tasks.indexOf("target.textContent"), 1);
    console.log(hello);
    localStorage.setItem("todo", tasks);
  }
  if (event.target.nodeName === "LI") {
    event.target.classList.toggle("done");
    task.innerHTML += `<i class="fa-solid fa-check"></i>`;
  }
});
function saveTask(text) {
  tasks.push(text);
  localStorage.setItem("todo", tasks);
}
function getTasks() {
  return localStorage.getItem("todo").split(",");
}
for (const element of getTasks()) {
  let task = creatTask(element);
  task.innerHTML += `<span class="absolute right-4 text-xl hidden hover:text-red">
    <i class="fa-solid fa-trash-can"></i>
  </span>`;
  ul.appendChild(task);
}
// let ali = [1, 2, 3, 4, 5];
// console.log(ali);
// ali.splice(2, 1);
// console.log(ali);
// let index = ali.indexOf(2);
// console.log(index);
