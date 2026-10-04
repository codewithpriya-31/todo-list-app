const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


// Add task when button is clicked
addButton.addEventListener("click", addTask);


// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


function addTask() {

    const taskText = taskInput.value.trim();

    // Prevent empty tasks
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }


    // Create list item
    const listItem = document.createElement("li");

    listItem.className = "task-item";


    // Create task text
    const taskSpan = document.createElement("span");

    taskSpan.className = "task-text";

    taskSpan.textContent = taskText;


    // Mark task as completed
    taskSpan.addEventListener("click", function() {
        taskSpan.classList.toggle("completed");
    });


    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "delete-button";


    // Delete task
    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });


    // Add elements to list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);


    // Add list item to task list
    taskList.appendChild(listItem);


    // Clear input
    taskInput.value = "";

    // Put cursor back in input
    taskInput.focus();
}