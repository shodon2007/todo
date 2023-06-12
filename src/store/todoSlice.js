import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
    },
    reducers: {
        add(state, action) {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                complete: false,
            })
        },

        remove(state, action) {
            state.todos = state.todos.filter((el, index) => index !== action.payload);
        },

        complete(state, action) {
            state.todos[action.payload].complete = !state.todos[action.payload].complete
        },
    }
});

export const { add, remove, complete} = todoSlice.actions;

export default todoSlice.reducer;