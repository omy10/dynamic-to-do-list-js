// Step 1: Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Step 2: Select DOM elements and store them in constants
    const addButton = document.getElementById('add-task-btn');     // "Add Task" button
    const taskInput = document.getElementById('task-input');       // Input field for new tasks
    const taskList = document.getElementById('task-list');         // UL element to display tasks

    // Step 3: Define the addTask function
    function addTask() {
        // Get the task text and trim whitespace
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Step 4: Create new <li> element for the task
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Step 5: Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Step 6: Attach an event to remove the task when "Remove" is clicked
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Step 7: Add the remove button to the <li>, and then add the <li> to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Step 8: Clear the input field
        taskInput.value = "";
    }

    // Step 9: Add event listener to call addTask when the button is clicked
    addButton.addEventListener('click', addTask);

    // Step 10: Add keypress event listener to call addTask when Enter is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });


});
