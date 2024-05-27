var taskList = document.getElementById("taskList");

function addTask() {
    var taskInput = document.getElementById("taskInput");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);

    taskInput.value = "";
}

