// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// Add event listener to add task button
addTaskBtn.addEventListener('click', addTask);

// Load tasks from local storage
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

// Add task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = { text: taskText };
        addTaskToDOM(task);
        saveTask(task);
        taskInput.value = '';
    }
}

// Add task to DOM
function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task.text}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;
    taskList.appendChild(li);

    // Add event listeners to edit and delete buttons
    li.querySelector('.edit').addEventListener('click', () => editTask(li, task));
    li.querySelector('.delete').addEventListener('click', () => deleteTask(li, task));
}

// Save task to local storage
function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Edit task
function editTask(li, task) {
    const newTaskText = prompt('Edit task:', task.text);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        task.text = newTaskText.trim();
        li.querySelector('span').textContent = task.text;
        updateTaskInStorage(task);
    }
}

// Update task in local storage
function updateTaskInStorage(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => task.text === updatedTask.text ? updatedTask : task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task
function deleteTask(li, task) {
    li.remove();
    removeTaskFromStorage(task);
}

// Remove task from local storage
function removeTaskFromStorage(taskToRemove) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== taskToRemove.text);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
