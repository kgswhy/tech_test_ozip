const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = [];
let showUnfinishedOnly = false;

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    text: taskText,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(task);
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  const filteredTasks = showUnfinishedOnly
    ? tasks.filter((task) => !task.completed)
    : tasks;

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = task.text;
    if (task.completed) {
      taskSpan.style.textDecoration = "line-through";
    }

    taskSpan.addEventListener("click", () => toggleTask(index));
    li.appendChild(taskSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function toggleFilter() {
  showUnfinishedOnly = !showUnfinishedOnly;
  const filterButton = document.getElementById("filterButton");
  filterButton.textContent = showUnfinishedOnly
    ? "Show All Tasks"
    : "Show Unfinished Only";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
