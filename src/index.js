document.addEventListener("DOMContentLoaded", () => {
  // id="create-task-form" action="" method="POST"></form>
  const form = document.getElementById("create-task-form");
  const input = document.querySelector('input[name="new-task-description"]');

  // console.log("Script loaded: form and input selected.");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("Form submitted.");

    const taskInput = input.value;
    // console.log(`Input value: "${taskInput}"`);

    if (taskInput.trim() !== "") {
      // console.log("Input is not empty, adding task...");
      buildToDo(taskInput);
    } else {
      // console.log("Input is empty, task not added.");
    }
    input.value = "";
    // console.log("Input cleared.");
  });
  function buildToDo(task) {
    // console.log(`Building task: "${task}"`);
    const li = document.createElement("li");
    li.textContent = task;

    const taskList = document.getElementById("tasks");
    taskList.appendChild(li);
    // console.log(`Task "${task}" added to the list.`);
  }
});
