window.onload = function () {
    showTask();
};

function addTask() {
    let taskInput = document.getElementById("taskInput");

    if (taskInput.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    // Save to local storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    showTask();
}

function showTask() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <span onclick="removeTask(${index})">X</span>`;
        taskList.appendChild(li);
    });
}

function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    showTask();
}