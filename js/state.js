
import { save, load } from "./storage.js";

export const state = {
    todos: [],
    filter: "all",
    theme: "light"
}


export function setState(updates) {
    Object.assign(state, updates);
    saveState();
}

export function setFilter(filter) {
    setState({ filter });
}

export function addTodo(text) {
    setState({
        todos: [...state.todos, { id: Date.now(), text, completed: false }]
    });
}

export function removeTodo(id) {
    setState({
        todos: state.todos.filter(todo => todo.id !== id)
    });
}

export function toggleTodo(id) {
    setState({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    });
}

export function saveState() {
    save("appState", state);
}

export function loadState() {
    const saved = load("appState");
    if (saved) {
        Object.assign(state, saved);
    }
}