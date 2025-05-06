document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const addButton = document.getElementById('addButton');
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Initialize the app
  renderTasks();

  // Add task event listeners
  addButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
      createdAt: new Date()
    };

    tasks.push(task);
    saveTasks();
    renderTasks();
    taskInput.value = '';
    taskInput.focus();
  }

  function renderTasks() {
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
      taskList.innerHTML = '<p class="empty-message">No tasks yet. Add one above!</p>';
      return;
    }

    tasks.forEach(task => {
      const li = document.createElement('li');
      if (task.completed) {
        li.classList.add('completed');
      }

      li.innerHTML = `
        <span>${task.text}</span>
        <div class="task-actions">
          <button class="delete-btn" data-id="${task.id}">×</button>
        </div>
      `;

      li.addEventListener('click', (e) => {
        if (!e.target.classList.contains('delete-btn')) {
          toggleTask(task.id);
        }
      });

      li.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTask(task.id);
      });

      taskList.appendChild(li);
    });
  }

  function toggleTask(id) {
    tasks = tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    );
    saveTasks();
    renderTasks();
  }

  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});