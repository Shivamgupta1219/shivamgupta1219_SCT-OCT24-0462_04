const input_text = document.getElementById("input-box");
const list_container = document.getElementsByClassName("listcontainer")[0];
const clickbtn = document.getElementById("click");

function addTask() {
  if (input_text.value === "") {
    alert("You must enter the task!!");
    location.reload(true);
  } else {
    let li = document.createElement("li");
    li.innerHTML = input_text.value;
    list_container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input_text.value = " ";
  saveData();
}

list_container.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
//local storage
function saveData() {
  localStorage.setItem("data", list_container.innerHTML);

}

function showTask(){
  list_container.innerHTML=localStorage.getItem("data")
}
showTask();
