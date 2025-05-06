const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let tasks = [];
let showUnfinishedOnly = false;

function addTask() {
  const taskText = taskInput.value;
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
    li.textContent = task.text;

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    li.addEventListener("click", () => {
      const realIndex = tasks.indexOf(task);
      toggleTask(realIndex);
    });

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
