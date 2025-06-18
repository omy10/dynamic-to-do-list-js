document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array from Local Storage or empty if none
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Load tasks on page load
    tasks.forEach(task => {
        renderTask(task);
    });

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Add to DOM and memory
        renderTask(taskText);

        // Save to tasks array and Local Storage
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = "";
    }

    // Function to render a task in the DOM
    function renderTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove from DOM and Local Storage
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            tasks = tasks.filter(task => task !== taskText); // Remove from array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated array
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
