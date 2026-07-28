
export const state = {
    todos: [],
    filter: "all",
    theme: "light"
};

export function setFilter(filter) {
    state.filter = filter;
}

export function addTodo(todo) {
    state.todos.push(todo);
}

export function removeTodo(id) {
    state.todos = state.todos.filter(todo => todo.id !== id);
}

export function toggleTodo(id) {
    const todo = state.todos.find(todo => todo.id === id);

    if (todo) {
        todo.completed = !todo.completed;
    }
}