const createStore = (initialState) => {
    let state = initialState;
    const listeners = [];

    return {
        getState: () => state,

        setState: (updates) => {
            state = { ...state, ...updates };

            // Notify all listeners
            listeners.forEach(listener => listener(state));
        },


        subscribe: (listener) => {
            listeners.push(listener);

            // Return unsubscribe function
            return () => {
                const index = listeners.indexOf(listener);
                listeners.splice(index, 1);
            };
        }
    };
};

const store = createStore({
    count: 0
});

function renderUI(state) {
    console.clear();

    console.log("Current State");

    console.table(state);
}

const unsubscribe = store.subscribe(state => {
    console.log("State changed:");

    renderUI(state);
});

store.setState({
    count: 1
});

store.setState({
    count: 2
});