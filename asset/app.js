let addBtn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
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
    input.value = "";
  }
});
ul.addEventListener("click", (event) => {
  if (event.target.nodeName === "I") {
    event.target.parentElement.parentElement.style = "display:none";
  }
  if (event.target.nodeName === "LI") {
    event.target.classList.toggle("done");
    task.innerHTML += `<i class="fa-solid fa-check"></i>`;
  }
});
