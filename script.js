document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");

    const task = document.createElement("span");
    task.textContent = taskText;

    // Mark task as completed when clicked
    task.addEventListener("click", function () {
      task.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete");

    // Delete task when clicked
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    li.appendChild(task);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field after adding task
    taskInput.value = "";
  }
}
