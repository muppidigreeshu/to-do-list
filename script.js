<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const filter = document.getElementById('filter');
    const clearCompleted = document.getElementById('clearCompleted');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText) {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const taskItem = e.target.parentElement;
            taskItem.classList.toggle('completed');
        }
    });

    filter.addEventListener('change', (e) => {
        const filterValue = e.target.value;
        filterTasks(filterValue);
    });

    clearCompleted.addEventListener('click', () => {
        const completedTasks = document.querySelectorAll('li.completed');
        completedTasks.forEach(task => task.remove());
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <button>✔️</button>
        `;
        todoList.appendChild(li);
    }

    function filterTasks(filter) {
        const tasks = todoList.childNodes;
        tasks.forEach(task => {
            if (task.nodeType === 1) {
                switch (filter) {
                    case 'all':
                        task.style.display = '';
                        break;
                    case 'completed':
                        task.style.display = task.classList.contains('completed') ? '' : 'none';
                        break;
                    case 'active':
                        task.style.display = !task.classList.contains('completed') ? '' : 'none';
                        break;
                }
            }
        });
    }
=======
// script.js

// Example of adding interactive functionality with JavaScript (optional)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
>>>>>>> 72ccaa668643394b1e2cbdafa627636f40842240
});
