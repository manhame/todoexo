const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask);//add a task on click

const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

function addTask(){
    const newTask = taskCard.cloneNode(true);//clone the task card
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task');
}
newTextArea.value = "New task";//set new task text to new task
newDelBtn.addEventListener('click', function(){//add delete event listener to new task
    deleteTask(taskCard);
}) 

tasksContainer.appendChild(newTask);//append new task to the tasks

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function(){//delete default task on click
    deleteTask(taskCard);//target the rignt task
});
function deleteTask(task){
    task.remove();//remove the task
}