  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  function addTask() {  
  

    if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
    }
   else{
    let listItem = document.createElement("li");
    listItem.innerHTML=taskInput.value;
    taskList.appendChild(listItem);
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    listItem.appendChild(span);
   }
    taskInput.value="";
   saveData();
  }
  taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       saveData();
    }
    else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
  }

  },false);


function saveData(){
  localStorage.setItem("data",taskList.innerHTML);
}
function showData(){
  taskList.innerHTML=localStorage.getItem("data");
}
showData();

  