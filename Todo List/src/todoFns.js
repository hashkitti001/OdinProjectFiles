let tasks = [];
let completedTasks = [];

class Item {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;

    }
}
function UpdateCount(){
    document.querySelector("#tcount").innerText = tasks.length;
    document.querySelector("#ccount").innerText = completedTasks.length;
}
setInterval(UpdateCount,1);
function createNewItem() {
    let title = document.querySelector("#title").value;
    let desc = document.querySelector("#desc").value;
    let dates = document.querySelector("#dates").value;
    let priority = document.querySelector("select").value;
    let task = new Item(title, desc, dates, priority);
    tasks.push(task);
   
}
function render(){
    let taskSpace = document.querySelector("#tasks");
    taskSpace.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let taskcontainer = document.createElement("div");
        taskcontainer.innerHTML =
            `
  <div class="task">
    
     <div class="task-header">
         <h1 class="title">${task.title}</h1>
         <h3 class="desc">${task.description}</h3>
     </div>
     <div class="body">
         <p>${task.dueDate}</p>
         <p>${task.priority}</p>
         <p class="done">${task.checkList ? "Done" : "Not Done"}</p>
     </div>
     <div>
     <button class="remove-btn" onclick="removeTask(${i})"></button>
     <button class="completed-btn" onclick="completeTask(${i})"></button>
     </div>
     </div>
     `

        taskSpace.appendChild(taskcontainer);
    }
    let cTasks = document.querySelector("#completedtasks");
    cTasks.innerHTML = "";
    for (let i = 0; i < completedTasks.length; i++) {
        let ctask = completedTasks[i];
        let ctaskcontainer = document.createElement("div");
        ctaskcontainer.innerHTML =
            `
  <div class="task">
    
     <div class="task-header">
         <h1 class="title"><s>${ctask.title}</s></h1>
         <h3 class="desc">${ctask.description}</h3>
     </div>
     <div class="body">
         <p>${ctask.dueDate}</p>
         <p>${ctask.priority}</p>
         <p class="done">${ctask.checkList ? "Done" : "Not Done"}</p>
     </div>
     <div>
     <button class="remove-btn" onclick="removeTask(${i})"></button>
     <button class="completed-btn" onclick="completeTask(${i})"></button>
     </div>
     </div>
     `

        cTasks.appendChild(ctaskcontainer);
}
    
}
function removeTask(index){
    tasks.splice(index, 1);
    render();
}
function completeTask(index){
    if(!completedTasks.includes(completedTasks[index])){
    completedTasks.push(tasks[index]);
    tasks.splice(index, 1);
    render();
    }
}
const refreshLocalStorage = () => {localStorage.setItem("tasks",JSON.stringify(tasks))}
setInterval(refreshLocalStorage, 1)
console.log(localStorage.getItem(tasks))

