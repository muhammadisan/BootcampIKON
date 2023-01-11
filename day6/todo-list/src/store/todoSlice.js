import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addNewTask: (state, action) => {
            state.todos = [...state.todos, {
                id: state.todos.length + 1,
                task: action.payload.task,
                description: action.payload.description,
                completed: false,
                deleted: false
            }]
        },
        changeCompletTask: (state, action) => {
            state.todos.map((todo) => todo.id === action.payload ? todo.completed = !todo.completed : todo)
        },
        changeDeleteTask: (state, action) => {
            state.todos.map((todo) => todo.id === action.payload ? todo.deleted = !todo.deleted : todo)
        }
    }
})

export const { addNewTask, changeCompletTask, changeDeleteTask } = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;

export default todoSlice.reducer;