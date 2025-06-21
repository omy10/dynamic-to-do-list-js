document.addEventListener('DOMContentLoaded', function () {

    // DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from localStorage or initialize empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render all tasks to the page
    tasks.forEach(function (taskText) {
        createTaskElement(taskText);
    });

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Add to DOM
        createTaskElement(taskText);

        // Add to local array and localStorage
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear input
        taskInput.value = "";
    }

    // Function to create and append a task element to the DOM
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Remove task from DOM and localStorage
        removeButton.onclick = function () {
            taskList.removeChild(listItem);

            // Remove task from array and update localStorage
            tasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    // Event listeners for adding tasks
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
