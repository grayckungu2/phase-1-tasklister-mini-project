document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = document.createElement("li");
    const taskInput = document.getElementById("new-task-description");
    newTask.innerText = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = "";
  });

});

