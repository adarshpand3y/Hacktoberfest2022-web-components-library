const input = document.querySelector('.add-task');
const list = document.querySelector('#list');

const noTask = document.querySelectorAll('#tasks-counter');
const noTaskRemain = document.querySelector('#tasks-remaining');

let tasks = [];
function addTask() {
  const text = input.value;
  if (!text) return;
  input.value = '';
  const task = {
    text: text,
    id: Date.now(),
    checked: false,
  };

  tasks.push(task);
  renderTask(tasks);
  noTask.forEach((el) => {
    el.innerHTML = tasks.length;
  });
}

function markTaskAsComplete(taskId) {
  tasks.forEach((task) => {
    if (task.id == taskId) {
      task.checked = !task.checked;
      renderTask(tasks);
      taskCompleted();
      return;
    }
  });
}

function removeTask(taskId) {
  const newTask = tasks.filter((el) => el.id != taskId);
  tasks = newTask;
  renderTask(tasks);
  noTask.forEach((el) => {
    el.innerHTML = tasks.length;
  });
  taskCompleted();
}

function renderTask(tasks) {
  list.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `<input
    type="checkbox"
    id="${task.id}"
    data-id="${task.id}"
    class="custom-checkbox"
    ${task.checked ? 'checked' : ''}
  />
  <label for="${task.id}">${task.text}</label>
  <i class="fa-sharp fa-solid fa-trash delete" id="${task.id}"></i>`;
    list.append(li);
  });
}

function taskCompleted() {
  let completed = 0;

  tasks.forEach((el) => {
    if (el.checked) {
      completed++;
    }
  });

  noTaskRemain.textContent = completed;
}

window.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') addTask();
  return;
});

window.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('delete')) {
    const taskId = target.id;
    removeTask(taskId);
  } else if (target.classList.contains('custom-checkbox')) {
    const taskId = target.id;
    markTaskAsComplete(taskId);
  }
});
