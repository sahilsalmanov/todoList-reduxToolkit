import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: new Date(),
        name: action.payload.task,
        completed: false 
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    toggleTask: (state, action) => {
      const task = state.find((item) => item.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    toggleTask: (state, action) => {
        const task = state.find((item) => item.id === action.payload.id);
        if (task) {
          task.completed = !task.completed;
        }
      }
  }
});

export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;

