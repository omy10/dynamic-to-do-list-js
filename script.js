document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array from localStorage or as empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Load existing tasks from localStorage
    loadTasks();

    // Function to load and display all tasks from localStorage
    function loadTasks() {
        tasks.forEach(function (taskText) {
            createTaskElement(taskText);
        });
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Add task to DOM
        createTaskElement(taskText);

        // Add task to array and update localStorage
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear input field
        taskInput.value = "";
    }

    // Function to create a task item in the DOM
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        removeButton.onclick = function () {
            taskList.removeChild(listItem);

            // Remove task from array and update localStorage
            tasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    // Event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
