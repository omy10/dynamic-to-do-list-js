// Run the code only after the full HTML content is loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select elements from the DOM
    const addButton = document.getElementById('add-task-btn');  // Add Task button
    const taskInput = document.getElementById('task-input');    // Input field
    const taskList = document.getElementById('task-list');      // UL element

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create the <li> element and set its text
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn'; // Use className instead of classList.add

        // Attach an event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Add the button to the <li>, and then the <li> to the list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }

    // Add click listener to the button
    addButton.addEventListener('click', addTask);

    // Add "Enter" key listener for the input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
