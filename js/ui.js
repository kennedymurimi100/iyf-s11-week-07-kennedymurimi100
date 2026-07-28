export function renderTodos(todoList, todos) {
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");

        li.textContent = todo.text;

        if (todo.completed) {
            li.classList.add("completed");
        }

        todoList.appendChild(li);
    });
}

export function showMessage(message) {
    console.log(message);
}


export function showSuccess(message) {
    console.log("✅", message);
}

export function showError(message) {
    console.error("❌", message);
}