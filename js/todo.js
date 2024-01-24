const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask);//add a task on click

const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

const count = document.querySelector("#count");//on adresse l'id html ciblée en déclarant la variable js
count.innerHTML = 1 + " tâche"//on fixe le nombre d'éléments HTML présents par défaut + du texte

function addTask(){
    const newTask = taskCard.cloneNode(true);//clone the task card sans oublier (true)qui inclut tout le contenu (text+bin)
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task');
    
    newTextArea.value = "New task";//set new task text to new task-affichera cette valeur dans chaque clone
    
    newDelBtn.addEventListener('click', function(){//add delete event listener to new task
        deleteTask(newTask);
    }) 
    
    tasksContainer.appendChild(newTask);//append new task to the tasks
    updateCount();//on inclut dans la fonction add...celle qui met à jour le compteur
}


function deleteTask(task) {//peu importe le nom de la fonction entre () car uniquement valable en son sein -idem dans tout langage
    task.remove();//remove the task
    updateCount();//on inclut dans la fonction del...celle qui met à jour le compteur
}

function updateCount() {
    const todoCards = document.querySelector("#todoCards")
    count.innerHTML = todoCards.children.length + " tâches"//on affecte au compteur la valeur du nombre d'enfants de l'id parente
}
