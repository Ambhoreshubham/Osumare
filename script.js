// Task List Array
let tasks = [];

// Add Task Function
function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;

    if (taskName === '') {
        alert('Please enter a task name.');
        return;
    }

    // Create a new task object
    const task = {
        id: tasks.length,
        name: taskName,
        description: taskDescription
    };

    // Add task to the tasks array
    tasks.push(task);

    // Update the task list UI
    displayTasks();

    // Clear input fields
    document.getElementById('taskName').value = '';
    document.getElementById('taskDescription').value = '';
}

// Display Tasks Function
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>${task.name}</strong>: ${task.description}</span>
            <div class="task-actions">
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Edit Task Function
function editTask(id) {
    const task = tasks.find(t => t.id === id);
    const newTaskName = prompt('Edit Task Name', task.name);
    const newTaskDescription = prompt('Edit Task Description', task.description);

    if (newTaskName !== null && newTaskName.trim() !== '') {
        task.name = newTaskName;
    }

    if (newTaskDescription !== null && newTaskDescription.trim() !== '') {
        task.description = newTaskDescription;
    }

    displayTasks();
}

// Delete Task Function
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    displayTasks();
}
