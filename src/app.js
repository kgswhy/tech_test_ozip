const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
let taskArray = [];
let showUnfinishedOnly = false;


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    text: taskText,
    isCompleted: false,
    createdAt: new Date(),
  };

  taskArray.push(task);
  taskInput.value = "";
  renderTasks();
}


function renderTasks() {
  taskList.innerHTML = "";
  const filterValue = document.getElementById("filterSelect").value;
  const filteredTasks = taskArray.filter((task) => {
    if (filterValue === "unfinished") return !task.isCompleted;
    if (filterValue === "finished") return task.isCompleted;
    return true;
  });

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = task.text;
    if (task.isCompleted) {
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
  taskArray[index].isCompleted = !taskArray[index].isCompleted;
  renderTasks();
}

function deleteTask(index) {
  taskArray.splice(index, 1);
  renderTasks();
}
