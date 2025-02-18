// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskName = document.getElementById("taskName").value;
    const taskDesc = document.getElementById("taskDesc").value;
    const taskDeadline = document.getElementById("taskDeadline").value;

    if (!taskName || !taskDesc || !taskDeadline) {
        alert("Please fill in all fields.");
        return;
    }

    // Create task object
    const newTask = {
        id: Date.now(), // Unique ID for each task
        name: taskName,
        desc: taskDesc,
        deadline: taskDeadline,
        completed: false
    };

    // Save to localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // localStorage.getItem("tasks") → Fetches stored tasks as a string.
    // JSON.parse(...) → Converts the string back into a JavaScript array.
    // || [] → If null (first time loading or empty storage), initializes an empty array.
    
    tasks.push(newTask);
    //Adds newTask (object containing task details) to the tasks array.

    localStorage.setItem("tasks", JSON.stringify(tasks));

    // JSON.stringify(tasks) → Converts the updated tasks array back into a string.
    // localStorage.setItem(...) → Saves the string in localStorage.


    // Render task in UI
    renderTask(newTask);

    // Clear input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskDesc").value = "";
    document.getElementById("taskDeadline").value = "";
}

// Function to delete task and remove from localStorage
function deleteTask(button, taskId) {
    button.parentElement.parentElement.remove();

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to toggle task completion status and update localStorage
function toggleTaskStatus(checkbox, taskId) {
    const taskContent = checkbox.parentElement.previousElementSibling;
    const statusLabel = checkbox.nextElementSibling;
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.completed = checkbox.checked; // Update task status
        }
        return task;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Update UI
    if (checkbox.checked) {
        taskContent.style.textDecoration = "line-through";
        statusLabel.textContent = "Complete";
    } else {
        taskContent.style.textDecoration = "none";
        statusLabel.textContent = "Incomplete";
    }
}

// Function to render tasks in the UI
function renderTask(task) {
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.innerHTML = `
        <div class="task-content" style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
            <strong>${task.name}</strong><br>
            ${task.desc}<br>
            <em>${task.deadline}</em>
        </div>
        <div class="task-actions">
            <input type="checkbox" class="task-status" onchange="toggleTaskStatus(this, ${task.id})" ${task.completed ? "checked" : ""}>
            <span class="task-status-label">${task.completed ? "Complete" : "Incomplete"}</span>
            <button class="delete-btn" onclick="deleteTask(this, ${task.id})">❌</button>
        </div>
    `;
    taskList.prepend(taskItem);
}

// Function to load tasks from localStorage on page load
function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));
}

// Attach event listener to the submit button
document.getElementById("submitBtn").addEventListener("click", addTask);

