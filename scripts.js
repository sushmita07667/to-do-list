document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task-input').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    addTask(taskInput, dueDate, priority, category);

    document.getElementById('task-form').reset();
});

function addTask(task, dueDate, priority, category) {
    const taskList = document.getElementById('task-list');
    
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.dataset.priority = priority;

    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    const taskText = document.createElement('span');
    taskText.textContent = task;

    const taskDetails = document.createElement('small');
    taskDetails.textContent = `Due: ${dueDate} | Priority: ${priority} | Category: ${category}`;

    taskInfo.appendChild(taskText);
    taskInfo.appendChild(taskDetails);

    const actions = document.createElement('div');
    actions.classList.add('actions');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Complete';
    completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('complete');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    taskItem.appendChild(taskInfo);
    taskItem.appendChild(actions);

    taskList.appendChild(taskItem);
}
